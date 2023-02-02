import * as React from "react";
import styles from "./ModalContainer.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside } from "../../hooks";
import { TbX } from "react-icons/tb";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import FocusTrap from "focus-trap-react";

export interface ModalContainerProps {
  /**
   * The buttons for the Modal
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Modal
   */
  content: string;
  /**
   * If the Modal is open
   */
  isOpen: boolean;
  /**
   * The callback fired when the Modal closes
   */
  onClose: () => void;
  /**
   * The title for the Modal
   */
  title: string;
}

export const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const { buttons, content, isOpen, onClose, title } = props;

  const modalRef = React.useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  useOnClickOutside(modalRef, onClose);

  return (
    <FocusTrap>
      <div className={styles.modalContainer} ref={modalRef}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{title}</div>
          <IconButton content={<TbX />} onClick={onClose}/>
        </div>
        <div className={styles.modalContent}>{content}</div>
        {buttons && <div className={styles.modalButtons}>{buttons}</div>}
      </div>
    </FocusTrap>
  );
};
