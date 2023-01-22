import classNames from "classnames";
import * as React from "react";
import styles from "./AstroLink.module.scss";

export type AstroLinkVariant = "primary" | "secondary";

export interface AstroLinkProps {
  /**
   * The content for the AstroLink
   */
  children: string;
  /**
   * The href for the AstroLink
   */
  href: string;
  /**
   * The variant for the AstroLink
   *
   * @default "primary"
   */
  variant?: AstroLinkVariant;
}

export const AstroLink: React.FC<AstroLinkProps> = (props) => {
  const { children, href, variant = "primary" } = props;

  const linkContainer = classNames(
    styles.astroLinkContainer,
    variant === "primary" ? styles.primary : styles.secondary
  );

  return (
    <a className={linkContainer} href={href}>
      {children}
    </a>
  );
};
