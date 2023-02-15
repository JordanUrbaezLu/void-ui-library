import * as React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";
import { BiCheckSquare } from "react-icons/bi";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Checkbox is on
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * The label for the Checkbox
   */
  label?: string;
  /**
   * The callback fired when requesting to change the Checkbox state
   */
  onChange: () => void;
}

/**
 * @public
 *
 * @description
 *
 * The Checkbox allows a user to select an item.
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    className,
    isChecked = false,
    label,
    onChange,
    ...rest
  } = props;

  return (
    <div
      className={classNames(className, styles.checkboxContainer)}
      role="checkbox"
      {...rest}
    >
      <div className={styles.checkbox}>
        {isChecked && (
          <BiCheckSquare
            className={styles.checkboxIcon}
            size={34}
            viewBox="3 3 18.1 18.1"
          />
        )}
        <div className={styles.checkboxBorder} onClick={onChange} />
      </div>
      {label && (
        <span
          className={classNames(
            styles.checkboxLabel,
            isChecked && styles.checked
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
