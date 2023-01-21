import * as React from "react";
import styles from "./AstroButton.module.scss";
import classNames from "classnames";

export type AstroButtonVariant = "primary" | "secondary";
export type AstroButtonSize = "small" | "medium" | "large";
export type AstroButtonType = "button" | "submit" | "reset";

export interface AstroButtonProps {
  /**
   * The content for the AstroButton
   */
  children: React.ReactNode;
  /**
   * If the AstroButton is disabled
   */
  disabled?: boolean;
  /**
   * The leading icon for the AstroButton
   */
  leadingIcon?: React.ReactNode;
  /**
   * The callback fired when the AstroButton is clicked
   */
  onClick?: () => void;
  /**
   * The size of the AstroButton
   *
   * @default "medium"
   */
  size?: AstroButtonSize;
  /**
   * The trailing icon for the AstroButton
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type of the AstroButton
   */
  type?: AstroButtonType;
  /**
   * The variant of the AstroButton
   *
   * @default "primary"
   */
  variant?: AstroButtonVariant;
}

const AstroButton = React.forwardRef<HTMLButtonElement, AstroButtonProps>(
  (props, ref) => {
    const {
      children,
      disabled,
      leadingIcon,
      onClick,
      size = "medium",
      trailingIcon,
      type,
      variant = "primary",
      ...rest
    } = props;

    const classes = classNames(
      styles.astroButton,
      size === "small"
        ? styles.small
        : size === "large"
        ? styles.large
        : styles.medium,
      variant === "secondary" ? styles.secondary : styles.primary,
      disabled && styles.disabled
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
        disabled={disabled}
        ref={ref}
        type={
          type === "reset" ? "reset" : type === "submit" ? "submit" : "button"
        }
        {...rest}
      >
        {content}
      </button>
    );
  }
);

export default AstroButton;
