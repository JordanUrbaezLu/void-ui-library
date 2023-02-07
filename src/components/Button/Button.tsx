import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The content for the Button
   */
  children: React.ReactNode;
  /**
   * If the Button is disabled
   */
  disabled?: boolean;
  /**
   * The leading icon for the Button
   */
  leadingIcon?: React.ReactNode;
  /**
   * The callback fired when the Button is clicked
   */
  onClick?: () => void;
  /**
   * The size of the Button
   *
   * @default "medium"
   */
  size?: ButtonSize;
  /**
   * The trailing icon for the Button
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type of the Button
   */
  type?: ButtonType;
  /**
   * The variant of the Button
   *
   * @default "primary"
   */
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    children,
    disabled = "false",
    leadingIcon,
    onClick,
    size = "medium",
    trailingIcon,
    type,
    variant = "primary",
    ...rest
  } = props;

  const classes = classNames(
    className,
    styles.button,
    size === "small"
      ? styles.small
      : size === "large"
      ? styles.large
      : styles.medium,
    variant === "secondary" ? styles.secondary : styles.primary
  );

  const content = (
    <>
      {leadingIcon && (
        <span className={styles.leadingIcon}>{leadingIcon}</span>
      )}
      {children}
      {trailingIcon && (
        <span className={styles.trailingIcon}>{trailingIcon}</span>
      )}
    </>
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      ref={ref}
      type={
        type === "reset"
          ? "reset"
          : type === "submit"
          ? "submit"
          : "button"
      }
      {...rest}
    >
      {content}
    </button>
  );
});
