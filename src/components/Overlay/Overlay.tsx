import classNames from "classnames";
import * as React from "react";
import styles from "./Overlay.module.scss";

export interface OverlayProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Overlay
   */
  children?: React.ReactNode;
  /**
   * If the Overlay shows the background
   *
   * @default true
   */
  showBackground?: boolean;
}

/**
 * @utility
 */
export const Overlay: React.FC<OverlayProps> = (props) => {
  const {
    className,
    children,
    showBackground = true,
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        showBackground ? styles.overlay : styles.noBackground,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
