import classNames from "classnames";
import * as React from "react";
import styles from "./AstroSideNavigation.module.scss";

export interface AstroSideNavigationProps {
  /**
   * The content for the AstroSideNavigation
   */
  children: React.ReactNode;
}

export const AstroSideNavigation: React.FC<AstroSideNavigationProps> = (
  props
) => {
  const { children } = props;

  return (
    <nav
      className={classNames(styles.astroSideNavigationContainer)}
      role="navigation"
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return React.cloneElement(child, { key: index });
        } else {
          return null;
        }
      })}
    </nav>
  );
};
