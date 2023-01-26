import classNames from "classnames";
import * as React from "react";
import styles from "./TextField.module.scss";

export type TextFieldVariant = "primary" | "secondary" | "tertiary";
export type TextFieldSize = "small" | "medium" | "large";
export type TextFieldType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url";

export interface TextFieldProps {
  /**
   * If the TextField is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The accessible label for the TextField
   *
   * @default "textfield"
   */
  label?: string;
  /**
   * The callback fired when requested to change the value for the TextField
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The size of the TextField
   *
   * @default "medium"
   */
  size?: TextFieldSize;
  /**
   * The trailing icon for the TextField
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type for the input in the TextField
   *
   * @default "text"
   */
  type?: TextFieldType;
  /**
   * The value for the TextField
   */
  value?: string;
  /**
   * The variant for the TextField
   *
   * @default "primary"
   */
  variant?: TextFieldVariant;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    variant = "primary",
    size = "medium",
    trailingIcon,
    disabled = false,
    onChange,
    type = "text",
    label = "textfield",
    value,
  } = props;

  const inputContainer = classNames(
    styles.textFieldContainer,
    disabled && styles.disabled
  );

  const classes = classNames(
    styles.textField,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "tertiary" && styles.tertiary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large,
    disabled && styles.disabled
  );

  const iconClasses = classNames(
    styles.icon,
    size === "small" && styles.iconSmall,
    size === "medium" && styles.iconMedium,
    size === "large" && styles.iconLarge,
    disabled && styles.disabled
  );

  const labelClasses = classNames(
    styles.label,
    size === "small" && styles.labelSmall,
    size === "medium" && styles.labelMedium,
    size === "large" && styles.labelLarge,
    disabled && styles.disabledLabel
  );

  return (
    <div className={styles.container}>
      <div className={inputContainer}>
        <input
          aria-label={label}
          className={classes}
          disabled={disabled}
          required
          onChange={onChange}
          type={type}
          value={value}
        />
        {label !== "textfield" && <span className={labelClasses}>{label}</span>}
      </div>
      {trailingIcon && <span className={iconClasses}>{trailingIcon}</span>}
    </div>
  );
};
