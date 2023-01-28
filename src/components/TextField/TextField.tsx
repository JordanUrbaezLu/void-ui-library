import classNames from "classnames";
import * as React from "react";
import styles from "./TextField.module.scss";

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

export interface TextFieldProps extends React.ComponentPropsWithoutRef<"div"> {
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
   * If the TextField is selectable
   *
   * @default true
   */
  selectable?: boolean;
  /**
   * The value for the TextField
   */
  value?: string;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    className,
    size = "medium",
    trailingIcon,
    disabled = false,
    onChange,
    selectable = true,
    type = "text",
    label = "textfield",
    value,
    ...rest
  } = props;

  const inputContainer = classNames(
    styles.textFieldContainer,
    disabled && styles.disabled
  );

  const classes = classNames(
    styles.textField,
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

  // Make textfield not selectable
  React.useEffect(() => {
    if (!selectable) {
      const textfield = document.getElementById(
        "void_textfield"
      ) as HTMLInputElement;
      textfield?.addEventListener(
        "select",
        () => {
          textfield.selectionStart = textfield.selectionEnd;
        },
        false
      );
    }
  }, []);

  return (
    <div className={styles.container} {...rest}>
      <div className={inputContainer}>
        <input
          aria-label={label}
          autoComplete="off"
          id="void_textfield"
          className={classNames(classes, className)}
          disabled={disabled}
          required
          onChange={onChange}
          spellCheck={false}
          type={type}
          value={value}
        />
        {label !== "textfield" && <span className={labelClasses}>{label}</span>}
      </div>
      {trailingIcon && <span className={iconClasses}>{trailingIcon}</span>}
    </div>
  );
};