import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Popup.module.scss";
import classNames from "classnames";
import { getPopupPositionCalculations } from "../../utility/getPopupPositionCalculations";
import {
  useOnFocus,
  useOnFocusOut,
  useOnHover,
  useOnHoverOut,
} from "../../hooks";

export type PopupPosition = "bottom" | "top";

export interface PopupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Popup has a nubbin
   *
   * @default false
   */
  hasNubbin?: boolean;
  /**
   * If the Popup initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
  /**
   * The position of the Popup
   *
   * @default "bottom"
   */
  position?: PopupPosition;
  /**
   * The text for the Popup
   */
  text: string;
  /**
   * The trigger for the Popup
   */
  trigger: React.ReactElement;
}

/**
 * @public
 */
export const Popup: React.FC<PopupProps> = (props) => {
  const {
    className,
    hasNubbin = false,
    startsOpen = false,
    position = "bottom",
    text,
    trigger,
    ...rest
  } = props;

  const [showPopup, setShowPopup] =
    React.useState<boolean>(startsOpen);

  const popupRef = React.useRef<HTMLDivElement>(null);

  const [popupPositionStyle, setPopupPositionStyle] =
    React.useState<React.CSSProperties | undefined>(undefined);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const popup = classNames(
    styles.popup,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useLayoutEffect(() => {
    setPopupPositionStyle(
      getPopupPositionCalculations({
        popupRef,
        triggerRef,
        position,
        hasNubbin,
      })
    );
  }, []);

  // Show Popup on focus or hover
  useOnFocus(triggerRef, () => setShowPopup(true));
  useOnHover(triggerRef, () => setShowPopup(true));

  // Hide Popup on focus out or hover out
  useOnFocusOut(triggerRef, () => setShowPopup(false));
  useOnHoverOut(triggerRef, () => setShowPopup(false));

  return (
    <div
      className={classNames(className, styles.container)}
      {...rest}
    >
      {React.cloneElement(trigger, {
        ref: triggerRef,
        role: "button",
        tabIndex: 0,
      })}
      <div
        className={styles.popupLayoutContainer}
        style={popupPositionStyle}
        ref={popupRef}
      >
        <CSSTransition
          in={showPopup}
          timeout={150}
          mountOnEnter
          unmountOnExit
          classNames={
            position === "top"
              ? {
                  enter: styles.enterTop,
                  enterActive: styles.enterTopActive,
                  exit: styles.exitTop,
                  exitActive: styles.exitTopActive,
                }
              : {
                  enter: styles.enterBottom,
                  enterActive: styles.enterBottomActive,
                  exit: styles.exitBottom,
                  exitActive: styles.exitBottomActive,
                }
          }
        >
          <div className={popup} role="tooltip">
            {text}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
