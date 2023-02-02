import * as React from "react";
import styles from "./Modal.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { ModalContainer } from "./ModalContainer";
import { CSSTransition } from "react-transition-group";

export interface ModalProps {
  /**
   * The buttons for the Modal
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Modal
   */
  content: string;
  /**
   * If the Modal has an overlay
   *
   * @default true
   */
  hasOverlay?: boolean;
  /**
   * If the Modal is open
   *
   * @default false
   */
  isOpen: boolean;
  /**
   * The callback fired when the Modal closes
   */
  onClose: () => void;
  /**
   * The callback fired when the Modal opens
   */
  onOpen: () => void;
  /**
   * The title for the Modal
   */
  title: string;
  /**
   * The trigger for the Modal
   */
  trigger: React.ReactElement;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    buttons,
    content,
    hasOverlay = true,
    isOpen = false,
    onClose,
    onOpen,
    title,
    trigger,
  } = props;

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: onOpen,
        role: "button",
        tabIndex: 0,
      })}
      <CSSTransition
        in={isOpen}
        timeout={250}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <Overlay showBackground={hasOverlay}>
          <div className={styles.modalBackground}>
            <ModalContainer
              buttons={buttons}
              content={content}
              isOpen={isOpen}
              onClose={onClose}
              title={title}
            />
          </div>
        </Overlay>
      </CSSTransition>
    </>
  );
};
