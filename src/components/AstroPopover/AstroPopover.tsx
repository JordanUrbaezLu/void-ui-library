import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroPopover.module.scss";
import classNames from "classnames";
import { getRefHeight as getTriggerHeight } from "../../utility/getRefHeight";
import { getRefWidth as getPopoverWidth } from "../../utility/getRefWidth";

export type AstroPopoverPosition = "bottom" | "top";

export interface AstroPopoverProps {
  /**
   * If the AstroPopover has a nubbin
   */
  hasNubbin?: boolean;
  /**
   * If the AstroPopover is open
   */
  isOpen: boolean;
  /**
   * The position of the AstroPopover
   */
  position?: AstroPopoverPosition;
  /**
   * The text for the AstroPopover
   */
  text: string;
  /**
   * The trigger for the AstroPopover
   */
  trigger: React.ReactNode;
}

const AstroPopover: React.FC<AstroPopoverProps> = ({
  trigger,
  position = "bottom",
  hasNubbin = false,
  text,
  isOpen = false,
}) => {
  const [triggerHeight, setTriggerHeight] = React.useState<number>();

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const classes = classNames(
    styles.astroPopover,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useEffect(() => {
    const height = getTriggerHeight({
      ref: triggerRef,
    });
    const width = getPopoverWidth({
      ref: popoverRef,
    });
    setTriggerHeight(height);
  }, [isOpen]);

  return (
    <div ref={triggerRef} className={styles.astroPopoverContainer}>
      {trigger}
      <CSSTransition
        in={isOpen}
        timeout={200}
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
        <div
          ref={popoverRef}
          style={
            position === "top"
              ? {
                  bottom: `${(triggerHeight || 0) + (hasNubbin ? 7 : 0) + 4}px`,
                }
              : {
                  bottom: `-${
                    (triggerHeight || 0) + (hasNubbin ? 7 : 0) + 4
                  }px`,
                }
          }
          className={classes}
        >
          {text}
        </div>
      </CSSTransition>
    </div>
  );
};

export default AstroPopover;
