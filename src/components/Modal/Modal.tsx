import * as React from "react";
import styles from "./Modal.module.scss";
import { Overlay } from "../Overlay/Overlay";
import {
  ModalContainer,
  ModalContainerProps,
} from "./ModalContainer";
import { CSSTransition } from "react-transition-group";

export interface ModalProps extends ModalContainerProps {
  /**
   * If the Modal has an overlay
   *
   * @default true
   */
  hasOverlay?: boolean;
  /**
   * The callback fired when the Modal opens
   */
  onOpen: () => void;
  /**
   * The trigger for the Modal
   */
  trigger: React.ReactElement;
}

/**
 * @public
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const {
    ariaLabel = "Modal",
    buttons,
    className,
    content,
    hasOverlay = true,
    isOpen = false,
    onClose,
    onOpen,
    title,
    trigger,
    ...rest
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
              ariaLabel={ariaLabel}
              buttons={buttons}
              className={className}
              content={content}
              isOpen={isOpen}
              onClose={onClose}
              title={title}
              {...rest}
            />
          </div>
        </Overlay>
      </CSSTransition>
    </>
  );
};
