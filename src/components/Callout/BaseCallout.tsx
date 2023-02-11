import * as React from "react";
import { useOnClickOutside } from "../../hooks";

import styles from "./BaseCallout.module.scss";

export type BaseCalloutPosition = "bottom" | "top" | "left" | "right";

export interface BaseCalloutOwnProps {
  onClose: () => void;
}

export interface BaseCalloutProps
  extends React.ComponentPropsWithoutRef<"div">,
    BaseCalloutOwnProps {
  position: BaseCalloutPosition;
}

export const BaseCallout = React.forwardRef<
  HTMLDivElement,
  BaseCalloutProps
>((props, ref) => {
  const { children, onClose } = props;

  useOnClickOutside(ref as React.RefObject<HTMLElement>, onClose);

  return (
    <div className={styles.baseCallout} ref={ref}>
      <div className={styles.content}>
        <div className={styles.label}>{children}</div>
      </div>
    </div>
  );
});
