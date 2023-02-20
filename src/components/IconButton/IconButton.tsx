import * as React from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";

export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps
  extends React.ComponentPropsWithRef<"button"> {
  /**
   * The accessibile label for the Icon Button
   *
   * @default "Icon Button"
   */
  ariaLabel?: string;
  /**
   * The content for the Icon Button
   *
   * @note Children must be short strings
   */
  children?: React.ReactNode;
  /**
   * The content for the Icon Button
   *
   * @note Content must be icons from "react-icons"
   */
  content?: React.ReactElement;
  /**
   * The size for the IconButton
   *
   * @default "medium"
   */
  size?: IconButtonSize;
}

/**
 * @public
 *
 * @description
 *
 * The Icon Button component displays an icon and
 * allows a user to take an action.
 */
export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const {
    ariaLabel = "Icon Button",
    children,
    className,
    content,
    size = "medium",
    ...rest
  } = props;

  const iconSizeNumber =
    size === "medium" ? 22 : size === "small" ? 18 : 26;

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        className,
        children && styles.children,
        styles.iconButton,
        size === "small" && styles.small,
        size === "medium" && styles.medium,
        size === "large" && styles.large
      )}
      ref={ref}
      {...rest}
    >
      {content
        ? React.cloneElement(content, {
            size: iconSizeNumber,
          })
        : children}
    </button>
  );
});

IconButton.displayName = "IconButton";
