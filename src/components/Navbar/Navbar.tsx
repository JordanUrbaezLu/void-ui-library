import classNames from "classnames";
import * as React from "react";
import styles from "./Navbar.module.scss";
import itemStyles from "./NavbarItem.module.scss";

export interface NavbarLogoProps {
  /**
   * The link for the Navbar's logo
   */
  link: string;
  /**
   * The url for the Navbar's logo
   */
  url: string;
}

export type NavbarVariant = "primary" | "secondary";

export interface NavbarProps {
  /**
   * The content for the Navbar
   */
  children?: React.ReactNode;
  /**
   * The props for the Navbar's logo
   */
  logoProps?: NavbarLogoProps;
  /**
   * The variant of the Navbar
   *
   * @default "primary"
   */
  variant?: NavbarVariant;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { children, logoProps, variant = "primary" } = props;

  const navbarContainer = classNames(
    styles.navbarContainer,
    variant === "primary" ? styles.primary : styles.secondary
  );

  const NavbarLogo = classNames(
    styles.NavbarLogo,
    variant === "primary" ? styles.primary : styles.secondary
  );

  return (
    <nav className={navbarContainer} role="navigation">
      {logoProps && (
        <a
          className={styles.NavbarLogoContainer}
          href={logoProps?.link ? logoProps.link : "#"}
        >
          <img className={NavbarLogo} src={logoProps?.url} alt="logo" />
        </a>
      )}
      <ul className={styles.listContainer}>
        {React.Children.map(children, (child) => {
          const navbarItem = child as React.ReactElement;

          return (
            <li
              className={classNames(
                variant === "primary"
                  ? itemStyles.primary
                  : itemStyles.secondary,
                styles.NavbarItemContainer
              )}
            >
              {navbarItem}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
