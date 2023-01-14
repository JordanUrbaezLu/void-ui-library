import * as React from "react";
import styles from "./AstroMenuItem.module.scss";

export interface AstroMenuItemProps {
  /**
   * The content for the AstroMenuItem
   */
  children: string;
}

const AstroMenuItem: React.FC<AstroMenuItemProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div className={styles.astroMenuItemContainer} {...rest}>
      {children}
    </div>
  );
};

export default AstroMenuItem;
