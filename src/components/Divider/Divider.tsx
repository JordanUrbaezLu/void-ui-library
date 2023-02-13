import * as React from "react";
import classNames from "classnames";
import styles from "./Divider.module.scss";

export type DividerDirection = "horizontal" | "vertical";

export interface DividerProps
  extends React.ComponentPropsWithoutRef<"span"> {
  /**
   * The direction of the Divider
   *
   * @default "horizontal"
   */
  direction?: DividerDirection;
  /**
   * The stroke width of the Divider
   *
   * @default 1
   */
  stroke?: number;
}

/**
 * @public
 */
export const Divider: React.FC<DividerProps> = (props) => {
  const {
    className,
    direction = "horizontal",
    stroke = 1,
    ...rest
  } = props;
  return (
    <span
      className={classNames(className, styles.divider)}
      role="separator"
      style={
        direction === "horizontal"
          ? { borderTop: `${stroke}px solid #c8c8c8`, width: "100%" }
          : {
              borderLeft: `${stroke}px solid #c8c8c8`,
              height: "100%",
            }
      }
      {...rest}
    />
  );
};
