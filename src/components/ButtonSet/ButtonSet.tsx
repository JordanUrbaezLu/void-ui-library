import * as React from "react";
import classNames from "classnames";
import styles from "./ButtonSet.module.scss";

export interface ButtonSetProps
  extends React.ComponentPropsWithoutRef<"ul"> {
  /**
   * The buttons in the Button Set
   */
  children: React.ReactNode;
  /**
   * The flex direction of the Button Set
   *
   * @default "row"
   */
  flexDirection?: "row" | "column";
}

/**
 * @public
 */
export const ButtonSet: React.FC<ButtonSetProps> = (props) => {
  const {
    className,
    children,
    flexDirection = "row",
    ...rest
  } = props;

  return (
    <ul
      className={classNames(
        styles.buttonSet,
        flexDirection === "column" && styles.buttonSetColumn,
        className
      )}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <li className={styles.buttonSetItem} key={index}>
            {child}
          </li>
        );
      })}
    </ul>
  );
};
