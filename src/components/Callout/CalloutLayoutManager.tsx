import * as React from "react";
import styles from "./CalloutLayoutManager.module.scss";
import { getCalloutPositionStyle } from "./CalloutLayoutManager.service";
import { BaseCalloutPosition } from "./BaseCallout";
import classNames from "classnames";

export interface CalloutLayoutContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  position: BaseCalloutPosition;
  targetRef: React.RefObject<HTMLElement>;
}

export const CalloutLayoutManager: React.FC<CalloutLayoutContainerProps> =
  (props) => {
    const { className, position, targetRef, ...rest } = props;

    const [rootStyle, setRootStyle] =
      React.useState<React.CSSProperties>({ visibility: "hidden" });

    const referrerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setRootStyle(
        getCalloutPositionStyle({ position, referrerRef, targetRef })
      );
    }, [position, referrerRef, targetRef]);

    return (
      <div
        className={classNames(
          styles.layoutManager,
          position === "top" && styles.top,
          position === "bottom" && styles.bottom,
          position === "left" && styles.left,
          position === "right" && styles.right,
          className
        )}
        ref={referrerRef}
        style={rootStyle}
        {...rest}
      />
    );
  };

CalloutLayoutManager.displayName = "CalloutLayoutManager";
