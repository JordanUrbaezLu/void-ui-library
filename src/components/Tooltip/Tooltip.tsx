import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Tooltip.module.scss";
import classNames from "classnames";
import { getTooltipPositionCalculations } from "../../utility/getTooltipPositionCalculations";
import { useShowOnFocus } from "../../hooks";

export type TooltipPosition = "bottom" | "top";

export interface TooltipProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Tooltip has a nubbin
   *
   * @default false
   */
  hasNubbin?: boolean;
  /**
   * If the Tooltip initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
  /**
   * The position of the Tooltip
   *
   * @default "bottom"
   */
  position?: TooltipPosition;
  /**
   * The text for the Tooltip
   */
  text: string;
  /**
   * The trigger for the Tooltip
   */
  trigger: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    className,
    hasNubbin = false,
    startsOpen = false,
    position = "bottom",
    text,
    trigger,
    ...rest
  } = props;

  const [showTooltip, setShowTooltip] = React.useState<boolean>(startsOpen);

  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const [tooltipPositionStyle, setTooltipPositionStyle] =
    React.useState<React.CSSProperties | undefined>(undefined);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  const tooltip = classNames(
    styles.tooltip,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useLayoutEffect(() => {
    setTooltipPositionStyle(
      getTooltipPositionCalculations({
        tooltipRef,
        triggerRef,
        position,
        hasNubbin,
      })
    );
  }, []);

  useShowOnFocus(triggerRef, setShowTooltip);

  return (
    <div className={classNames(className, styles.container)} {...rest}>
      {React.cloneElement(trigger, {
        onMouseEnter: () => setShowTooltip(true),
        onMouseLeave: () => setShowTooltip(false),
        ref: triggerRef,
        role: "button",
        tabIndex: 0,
      })}
      <div
        className={styles.tooltipLayoutContainer}
        style={tooltipPositionStyle}
        ref={tooltipRef}
      >
        <CSSTransition
          in={showTooltip}
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
          <div className={tooltip}>{text}</div>
        </CSSTransition>
      </div>
    </div>
  );
};
