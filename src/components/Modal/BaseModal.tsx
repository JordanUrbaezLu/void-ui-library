import * as React from "react";
import styles from "./BaseModal.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import { TbX } from "react-icons/tb";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Divider } from "../Divider/Divider";
import classNames from "classnames";

export interface BaseModalProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the Modal
   */
  ariaLabel?: string;
  /**
   * The buttons for the Modal
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Modal
   */
  content: string;
  /**
   * The callback fired when the Modal closes
   */
  onClose: () => void;
  /**
   * The title for the Modal
   */
  title: string;
}

/**
 * @private
 */
export const BaseModal: React.FC<BaseModalProps> = (props) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    onClose,
    title,
    ...rest
  } = props;

  const modalRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  useOnKeyDown(["Escape"], onClose);

  return (
    <FocusTrap>
      <div
        aria-label={ariaLabel}
        className={classNames(className, styles.modalContainer)}
        ref={modalRef}
        role="dialog"
        {...rest}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{title}</div>
          <IconButton
            className={styles.modalIcon}
            content={<TbX />}
            onClick={onClose}
          />
        </div>
        <div className={styles.modalContent}>{content}</div>
        {buttons && (
          <>
            <Divider direction="horizontal" stroke={1} />
            <div className={styles.modalButtons}>{buttons}</div>
          </>
        )}
      </div>
    </FocusTrap>
  );
};
