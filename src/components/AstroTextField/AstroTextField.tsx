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
  variant?: AstroTextFieldVariant;
  size?: AstroTextFieldSize;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  type?: AstroTextFieldType;
  label?: string;
}

const AstroTextField: React.FC<AstroTextFieldProps> = ({
  variant = "primary",
  size = "medium",
  trailingIcon,
  disabled = false,
  type = "text",
  label = "textfield",
}) => {
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
          type={type}
          disabled={disabled}
          className={classes}
          required
        />
        {label !== "textfield" && <span className={labelClasses}>{label}</span>}
      </div>
      {trailingIcon && <span className={iconClasses}>{trailingIcon}</span>}
    </div>
  );
};

export default AstroTextField;
