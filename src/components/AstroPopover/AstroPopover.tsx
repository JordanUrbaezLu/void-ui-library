import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroPopover.module.scss";
import classNames from "classnames";
import { getAstroPopoverPositionCalculations } from "../../utility/getAstroPopoverPositionCalculations";

export type AstroPopoverPosition = "bottom" | "top";

export interface AstroPopoverProps {
  /**
   * If the AstroPopover has a nubbin
   *
   * @default false
   */
  hasNubbin?: boolean;
  /**
   * If the AstroPopover is open
   */
  isOpen: boolean;
  /**
   * The position of the AstroPopover
   *
   * @default "bottom"
   */
  position?: AstroPopoverPosition;
  /**
   * The text for the AstroPopover
   */
  text: string;
  /**
   * The callback fired when the AstroPopover toggles
   */
  toggleOpen: () => void;
  /**
   * The trigger for the AstroPopover
   */
  trigger: React.ReactElement;
}

export const AstroPopover: React.FC<AstroPopoverProps> = (props) => {
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

  const astroPopover = classNames(
    styles.astroPopover,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useLayoutEffect(() => {
    setPopoverPositionStyle(
      getAstroPopoverPositionCalculations({
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
        className={styles.astroPopoverLayoutContainer}
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
          <div className={astroPopover}>{text}</div>
        </CSSTransition>
      </div>
    </div>
  );
};
