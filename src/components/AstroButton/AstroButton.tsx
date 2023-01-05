import * as React from "react";
import styles from "./AstroButton.module.scss";
import classNames from "classnames";

export type AstroButtonVariants = "primary" | "secondary";
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
   */
  variant?: AstroButtonVariants;
}

const AstroButton = React.forwardRef<HTMLButtonElement, AstroButtonProps>(
  (props, ref) => {
    const classes = classNames(
      styles.astroButton,
      props.size === "small"
        ? styles.small
        : props.size === "large"
        ? styles.large
        : styles.medium,
      props.variant === "secondary" ? styles.secondary : styles.primary,
      props.disabled && styles.disabled
    );

    const content = (
      <>
        {props.leadingIcon && (
          <span className={styles.leadingIcon}>{props.leadingIcon}</span>
        )}
        {props.children}
        {props.trailingIcon && (
          <span className={styles.trailingIcon}>{props.trailingIcon}</span>
        )}
      </>
    );

    return (
      <button
        type={
          props.type === "reset"
            ? "reset"
            : props.type === "submit"
            ? "submit"
            : "button"
        }
        onClick={props.onClick}
        ref={ref}
        className={classes}
      >
        {content}
      </button>
    );
  }
);

export default AstroButton;
