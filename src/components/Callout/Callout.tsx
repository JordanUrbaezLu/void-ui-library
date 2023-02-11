import * as React from "react";
import { CalloutLayoutManager } from "./CalloutLayoutManager";
import styles from "./Callout.module.scss";
import {
  BaseCallout,
  BaseCalloutOwnProps,
  BaseCalloutPosition as CalloutPosition,
} from "./BaseCallout";
import classNames from "classnames";

export interface CalloutProps extends BaseCalloutOwnProps {
  children: React.ReactElement;
  content: React.ReactNode;
  isOpen?: boolean;
  position: CalloutPosition;
  targetRef: React.RefObject<HTMLElement>;
}

export const Callout: React.FC<CalloutProps> = (props) => {
  const {
    children,
    content,
    isOpen = false,
    onClose,
    position,
    targetRef,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <span
      className={classNames(
        styles.callout,
        position === "top" && styles.top,
        position === "bottom" && styles.bottom,
        position === "left" && styles.left,
        position === "right" && styles.right
      )}
    >
      {children}

      {isOpen && (
        <CalloutLayoutManager
          position={position}
          targetRef={targetRef}
        >
          <BaseCallout
            onClose={onClose}
            ref={ref}
            position={position}
          >
            <span>{content}</span>
          </BaseCallout>
        </CalloutLayoutManager>
      )}
    </span>
  );
};
