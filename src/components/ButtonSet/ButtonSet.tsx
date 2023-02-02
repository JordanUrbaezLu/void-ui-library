import * as React from "react";
import classNames from "classnames";
import styles from "./ButtonSet.module.scss";

export interface ButtonSetProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The buttons in the Button Set
   */
  children: React.ReactNode;
}

export const ButtonSet: React.FC<ButtonSetProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div className={classNames(styles.buttonSet, className)} {...rest}>
      {children}
    </div>
  );
};
