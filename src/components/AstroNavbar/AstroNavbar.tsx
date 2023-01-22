import classNames from "classnames";
import * as React from "react";
import styles from "./AstroNavbar.module.scss";
import itemStyles from "./AstroNavbarItem.module.scss";

export interface AstroNavbarLogoProps {
  /**
   * The link for the AstroNavbar's logo
   */
  link: string;
  /**
   * The url for the AstroNavbar's logo
   */
  url: string;
}

export type AstroNavbarVariant = "primary" | "secondary";

export interface AstroNavbarProps {
  /**
   * The content for the AstroNavbar
   */
  children?: React.ReactNode;
  /**
   * The props for the AstroNavbar's logo
   */
  logoProps?: AstroNavbarLogoProps;
  /**
   * The variant of the AstroNavbar
   *
   * @default "primary"
   */
  variant?: AstroNavbarVariant;
}

export const AstroNavbar: React.FC<AstroNavbarProps> = (props) => {
  const { children, logoProps, variant = "primary" } = props;

  const astroNavbarContainer = classNames(
    styles.astroNavbarContainer,
    variant === "primary" ? styles.primary : styles.secondary
  );

  const astroNavbarLogo = classNames(
    styles.astroNavbarLogo,
    variant === "primary" ? styles.primary : styles.secondary
  );

  return (
    <nav className={astroNavbarContainer} role="navigation">
      {logoProps && (
        <a
          className={styles.astroNavbarLogoContainer}
          href={logoProps?.link ? logoProps.link : "#"}
        >
          <img className={astroNavbarLogo} src={logoProps?.url} alt="logo" />
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
                styles.astroNavbarItemContainer
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
