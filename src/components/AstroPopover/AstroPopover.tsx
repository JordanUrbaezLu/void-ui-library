import * as React from "react";
import styles from "./AstroPopover.module.scss";
import classNames from "classnames";
import { getRefHeight as getTriggerHeight } from "../../utility/getRefHeight";
import { getRefWidth as getPopoverWidth } from "../../utility/getRefWidth";

export type AstroPopoverPosition = "bottom" | "top";

interface AstroPopoverProps {
  trigger: React.ReactNode;
  position?: AstroPopoverPosition;
  hasNubbin?: boolean;
  text: string;
  isOpen?: boolean;
}

const AstroPopover: React.FC<AstroPopoverProps> = ({
  trigger,
  position = "bottom",
  hasNubbin = false,
  text,
  isOpen = false,
}) => {
  const [triggerHeight, setTriggerHeight] = React.useState<number>();
  const [popoverWidth, setPopoverWidth] = React.useState<number>();

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
    setPopoverWidth(width);
  }, [isOpen]);

  return (
    <div ref={triggerRef} className={styles.astroPopoverContainer}>
      {trigger}
      <div
        style={
          isOpen ? { transition: "opacity 0.5s", opacity: 1 } : { opacity: 0 }
        }
      >
        {isOpen && (
          <div
            ref={popoverRef}
            style={
              position === "top"
                ? {
                    bottom: `${
                      (triggerHeight || 0) + (hasNubbin ? 7 : 0) + 4
                    }px`,
                    transform: `translateX(${-0.5 * (popoverWidth || 0)}px)`,
                  }
                : { transform: `translateX(${-0.5 * (popoverWidth || 0)}px)` }
            }
            className={classes}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default AstroPopover;
