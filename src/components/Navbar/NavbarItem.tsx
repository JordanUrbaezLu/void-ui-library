import * as React from "react";
import styles from "./NavbarItem.module.scss";

export interface NavbarItemProps {
  /**
   * The content for the NavbarItem
   */
  children: React.ReactNode;
  /**
   * The url link for the NavbarItem
   */
  link: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const { children, link } = props;
  return (
    <a className={styles.navbarItemLinkContainer} href={link}>
      {children}
    </a>
  );
};
