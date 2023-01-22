import classNames from "classnames";
import * as React from "react";
import styles from "./AstroTextField.module.scss";

export type AstroTextFieldVariant = "primary" | "secondary" | "tertiary";
export type AstroTextFieldSize = "small" | "medium" | "large";
export type AstroTextFieldType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url";

export interface AstroTextFieldProps {
  /**
   * If the AstroTextField is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The accessible label for the AstroTextField
   *
   * @default "textfield"
   */
  label?: string;
  /**
   * The callback fired when requested to change the value for the AstroTextField
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The size of the AstroTextField
   *
   * @default "medium"
   */
  size?: AstroTextFieldSize;
  /**
   * The trailing icon for the AstroTextField
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type for the input in the AstroTextField
   *
   * @default "text"
   */
  type?: AstroTextFieldType;
  /**
   * The value for the AstroTextField
   */
  value?: string;
  /**
   * The variant for the AstroTextField
   *
   * @default "primary"
   */
  variant?: AstroTextFieldVariant;
}

export const AstroTextField: React.FC<AstroTextFieldProps> = (props) => {
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
    styles.astroTextFieldContainer,
    disabled && styles.disabled
  );

  const classes = classNames(
    styles.astroTextField,
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
