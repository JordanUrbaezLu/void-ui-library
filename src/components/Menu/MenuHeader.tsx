import classNames from "classnames";
import * as React from "react";
import styles from "./MenuHeader.module.scss";

export interface MenuHeaderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the MenuHeader
   */
  children: string;
}

/**
 * @public
 */
export const MenuHeader: React.FC<MenuHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={classNames(className, styles.menuHeader)}
      role="presentation"
      {...rest}
    >
      {children.toUpperCase()}
    </div>
  );
};

MenuHeader.displayName = "MenuHeader";
