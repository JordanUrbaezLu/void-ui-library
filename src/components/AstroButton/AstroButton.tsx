import * as React from "react";
import styles from "./AstroButton.module.scss";
import classNames from "classnames";

export type AstroButtonVariants = "primary" | "secondary";
export type AstroButtonSize = "small" | "medium" | "large";
export type AstroButtonType = "button" | "submit" | "reset";

export interface AstroButtonProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: AstroButtonSize;
  variant?: AstroButtonVariants;
  children: React.ReactNode;
  disabled?: boolean;
  type?: AstroButtonType;
  onClick?: () => void;
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
