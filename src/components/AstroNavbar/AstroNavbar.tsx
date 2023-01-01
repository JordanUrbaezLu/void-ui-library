import * as React from "react";
import styles from "./AstroNavbar.module.scss";

export interface AstroNavbarLogoProps {
  /**
   * The link for the AstroNavbar's logo
   */
  link?: string;

  /**
   * The url for the AstroNavbar's logo
   */
  url?: string;
}

export interface AstroNavbarProps {
  /**
   * The content for the AstroNavbar
   */
  children?: React.ReactNode;
  /**
   * The props for the AstroNavbar's logo
   */
  logoProps?: AstroNavbarLogoProps;
}

const AstroNavbar: React.FC<AstroNavbarProps> = ({ children, logoProps }) => {
  return (
    <nav className={styles.astroNavbarContainer}>
      <a
        className={styles.logoContainer}
        href={logoProps?.link ? logoProps.link : "#"}
      >
        <img src={logoProps?.url} />
      </a>
      <ul className={styles.listContainer}>{children}</ul>
    </nav>
  );
};

export default AstroNavbar;
