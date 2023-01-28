import classNames from "classnames";
import * as React from "react";
import styles from "./Checkbox.module.scss";
import { BiCheckSquare } from "react-icons/bi";

export interface CheckboxProps {
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

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { isChecked = false, label, onChange, ...rest } = props;

  return (
    <div className={styles.checkboxContainer} role="checkbox">
      <div className={styles.checkbox} {...rest}>
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
