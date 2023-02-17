import classNames from "classnames";
import * as React from "react";

import styles from "./BasePopup.module.scss";

export type BasePopupPosition = "bottom" | "top" | "left" | "right";

export interface BasePopup
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Popup has an indicator
   */
  hasIndicator: boolean;
  /**
   * The position of the Popup
   */
  position: BasePopupPosition;
  /**
   * The text for the Popup
   */
  text: string;
}

export const BasePopup = React.forwardRef<HTMLDivElement, BasePopup>(
  (props, ref) => {
    const { hasIndicator, position, text } = props;

    return (
      <div
        className={classNames(
          hasIndicator && styles.indicator,
          position === "bottom" && styles.bottom,
          position === "top" && styles.top,
          position === "left" && styles.left,
          position === "right" && styles.right,
          styles.basePopup
        )}
        ref={ref}
        role="tooltip"
      >
        {text}
      </div>
    );
  }
);

BasePopup.displayName = "BasePopup";
