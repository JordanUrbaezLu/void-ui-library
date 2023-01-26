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
   * If the Popover is open
   */
  isOpen: boolean;
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
   * The callback fired when the Popover toggles
   */
  toggleOpen: () => void;
  /**
   * The trigger for the Popover
   */
  trigger: React.ReactElement;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const {
    hasNubbin = false,
    isOpen,
    position = "bottom",
    text,
    toggleOpen,
    trigger,
  } = props;

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

  return (
    <div className={styles.container}>
      {React.cloneElement(trigger, {
        onClick: () => toggleOpen(),
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
          in={isOpen}
          timeout={250}
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
