import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Popover.module.scss";
import classNames from "classnames";
import { getPopoverPositionCalculations } from "../../utility/getPopoverPositionCalculations";

export type PopoverPosition = "bottom" | "top";

export interface PopoverProps {
  /**
   * If the Popover has a nubbin
   *
   * @default false
   */
  hasNubbin?: boolean;
  /**
   * If the Popover initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
  /**
   * The position of the Popover
   *
   * @default "bottom"
   */
  position?: PopoverPosition;
  /**
   * The text for the Popover
   */
  text: string;
  /**
   * The trigger for the Popover
   */
  trigger: React.ReactElement;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const {
    hasNubbin = false,
    startsOpen = false,
    position = "bottom",
    text,
    trigger,
  } = props;

  const [showPopover, setShowPopover] = React.useState<boolean>(startsOpen);

  const popoverRef = React.useRef<HTMLDivElement>(null);

  const [popoverPositionStyle, setPopoverPositionStyle] =
    React.useState<React.CSSProperties | undefined>(undefined);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const popover = classNames(
    styles.popover,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useLayoutEffect(() => {
    setPopoverPositionStyle(
      getPopoverPositionCalculations({
        popoverRef,
        triggerRef,
        position,
        hasNubbin,
      })
    );
  }, []);
  
  React.useEffect(() => {
    triggerRef.current?.addEventListener("focus", () => {
      setShowPopover(true);
    });

    triggerRef.current?.addEventListener("focusout", () => {
      setShowPopover(false);
    });

    return () => {
      triggerRef.current?.removeEventListener("focus", () => {
        setShowPopover(true);
      });

      triggerRef.current?.removeEventListener("focusout", () => {
        setShowPopover(false);
      });
    };
  }, [triggerRef]);

  return (
    <div className={styles.container}>
      {React.cloneElement(trigger, {
        onMouseEnter: () => setShowPopover(true),
        onMouseLeave: () => setShowPopover(false),
        ref: triggerRef,
        role: "button",
        tabIndex: 0,
      })}
      <div
        className={styles.popoverLayoutContainer}
        style={popoverPositionStyle}
        ref={popoverRef}
      >
        <CSSTransition
          in={showPopover}
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
          <div className={popover}>{text}</div>
        </CSSTransition>
      </div>
    </div>
  );
};
