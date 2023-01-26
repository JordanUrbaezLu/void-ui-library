import classNames from "classnames";
import * as React from "react";
import styles from "./Link.module.scss";

export type LinkVariant = "primary" | "secondary";

export interface LinkProps {
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

export const Link: React.FC<LinkProps> = (props) => {
  const { children, href, variant = "primary" } = props;

  const linkContainer = classNames(
    styles.linkContainer,
    variant === "primary" ? styles.primary : styles.secondary
  );

  return (
    <a className={linkContainer} href={href}>
      {children}
    </a>
  );
};
