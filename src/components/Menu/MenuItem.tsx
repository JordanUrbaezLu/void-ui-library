import * as React from "react";
import styles from "./MenuItem.module.scss";

export interface MenuItemProps {
  /**
   * The content for the MenuItem
   */
  children: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div className={styles.menuItemContainer} {...rest}>
      {children}
    </div>
  );
};
