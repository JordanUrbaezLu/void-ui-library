import * as React from "react";
import styles from "./AstroNavbarItem.module.scss";

export interface AstroNavbarItemProps {
  /**
   * The content for the AstroNavbarItem
   */
  children: React.ReactNode;
  /**
   * The url link for the AstroNavbarItem
   */
  link: string;
}

const AstroNavbarItem: React.FC<AstroNavbarItemProps> = ({
  children,
  link,
}) => {
  return (
    <li className={styles.astroNavbarItemContainer}>
      <a href={link}>{children}</a>
    </li>
  );
};
export default AstroNavbarItem;
