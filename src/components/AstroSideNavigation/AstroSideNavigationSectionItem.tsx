import classNames from "classnames";
import * as React from "react";
import styles from "./AstroSideNavigationSectionItem.module.scss";

export interface AstroSideNavigationSectionItemProps {
  /**
   * The content for the AstroSideNavigationSectionItem
   */
  children: string;
}

export const AstroSideNavigationSectionItem: React.FC<AstroSideNavigationSectionItemProps> =
  (props) => {
    const { children } = props;

    return (
      <li
        className={classNames(styles.astroSideNavigationSectionItemContainer)}
      >
        {children}
      </li>
    );
  };
