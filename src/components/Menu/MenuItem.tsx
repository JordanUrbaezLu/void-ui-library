import classNames from "classnames";
import * as React from "react";
import styles from "./MenuItem.module.scss";

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the MenuItem
   */
  children: string;
}

/**
 * @public
 */
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={classNames(className, styles.menuItemContainer)}
      {...rest}
    >
      {children}
    </div>
  );
};

MenuItem.displayName = "MenuItem";
