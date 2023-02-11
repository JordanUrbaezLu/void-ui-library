import classNames from "classnames";
import * as React from "react";
import styles from "./Link.module.scss";

export type LinkVariant = "primary" | "secondary";

export interface LinkProps
  extends React.ComponentPropsWithoutRef<"a"> {
  /**
   * The content for the Link
   */
  children: string;
  /**
   * The href for the Link
   */
  href: string;
  /**
   * The variant for the Link
   *
   * @default "primary"
   */
  variant?: LinkVariant;
}

/**
 * @public
 */
export const Link: React.FC<LinkProps> = (props) => {
  const {
    className,
    children,
    href,
    variant = "primary",
    ...rest
  } = props;

  const linkContainer = classNames(
    className,
    styles.linkContainer,
    variant === "primary" ? styles.primary : styles.secondary
  );

  return (
    <a className={linkContainer} href={href} {...rest}>
      {children}
    </a>
  );
};
