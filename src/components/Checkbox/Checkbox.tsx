import classNames from "classnames";
import * as React from "react";
import styles from "./Checkbox.module.scss";
import { BiCheckSquare } from "react-icons/bi";

export type CheckboxVariant = "primary" | "secondary";

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
   * The callback fired when the Checkbox is clicked
   */
  onClick: () => void;
  /**
   * The variant of the Checkbox
   *
   * @default "primary"
   */
  variant?: CheckboxVariant;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    isChecked = false,
    label,
    onClick,
    variant = "primary",
    ...rest
  } = props;

  const checkboxIcon = classNames(
    styles.checkboxIcon,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary
  );

  const checkboxBorder = classNames(
    styles.checkboxBorder,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary
  );

  const checkboxLabel = classNames(
    styles.checkboxLabel,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isChecked && styles.checked
  );

  return (
    <div className={styles.checkboxContainer} role="checkbox">
      <div className={styles.checkbox} {...rest}>
        {isChecked && (
          <BiCheckSquare
            className={checkboxIcon}
            size={34}
            viewBox="3 3 18.1 18.1"
          />
        )}
        <div className={checkboxBorder} onClick={onClick} />
      </div>
      {label && <span className={checkboxLabel}>{label}</span>}
    </div>
  );
};
