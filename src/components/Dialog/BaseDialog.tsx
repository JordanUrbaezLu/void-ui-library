import * as React from "react";
import styles from "./BaseDialog.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import { TbX } from "react-icons/tb";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Separator } from "../Separator/Separator";
import classNames from "classnames";

export type BaseDialogVariant =
  | "bottom"
  | "center"
  | "left"
  | "right";

export interface BaseDialogProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the Dialog
   */
  ariaLabel?: string;
  /**
   * The buttons for the Dialog
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Dialog
   */
  content: string;
  /**
   * The callback fired when the Dialog closes
   */
  onClose: () => void;
  /**
   * The title for the Dialog
   */
  title: string;
  /**
   * The variant of the Dialog
   *
   * @default "center"
   */
  variant?: BaseDialogVariant;
}

/**
 * @private
 */
export const BaseDialog: React.FC<BaseDialogProps> = (props) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    onClose,
    title,
    variant = "center",
    ...rest
  } = props;

  const dialogRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(dialogRef, onClose);

  useOnKeyDown(["Escape"], onClose);

  return (
    <FocusTrap>
      <div
        aria-label={ariaLabel ?? "dialog"}
        className={classNames(
          className,
          styles.dialogContainer,
          variant === "bottom" && styles.bottom,
          variant === "center" && styles.center,
          variant === "left" && styles.left,
          variant === "right" && styles.right
        )}
        ref={dialogRef}
        role="dialog"
        {...rest}
      >
        <div className={styles.dialogHeader}>
          <div className={styles.dialogTitle}>{title}</div>
          <IconButton
            className={styles.dialogIcon}
            content={<TbX />}
            onClick={onClose}
          />
        </div>
        {(variant === "left" || variant === "right") && (
          <Separator direction="horizontal" stroke={1} />
        )}
        <div className={styles.dialogContent}>{content}</div>
        {buttons && (
          <div
            className={classNames(
              variant === "left" && styles.dialogButtonsContainer,
              variant === "right" && styles.dialogButtonsContainer
            )}
          >
            <Separator direction="horizontal" stroke={1} />
            <div className={styles.dialogButtons}>{buttons}</div>
          </div>
        )}
      </div>
    </FocusTrap>
  );
};

BaseDialog.displayName = "BaseDialog";