import * as React from "react";
import styles from "./BottomSheet.module.scss";
import { Overlay } from "../Overlay/Overlay";
import {
  BaseBottomSheet,
  BaseBottomSheetProps,
} from "./BaseBottomSheet";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { CSSTransition } from "react-transition-group";

export interface BottomSheetProps extends BaseBottomSheetProps {
  /**
   * If the BottomSheet has an overlay
   *
   * @default true
   */
  hasOverlay?: boolean;
  /**
   * If the BottomSheet is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the BottomSheet opens
   */
  onOpen: () => void;
  /**
   * The trigger for the BottomSheet
   */
  trigger: React.ReactElement;
}

/**
 * @public
 */
export const BottomSheet: React.FC<BottomSheetProps> = (props) => {
  const {
    ariaLabel = "BottomSheet",
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

  useLockBodyScroll(isOpen);

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
          <div className={styles.bottomSheetBackground}>
            <BaseBottomSheet
              ariaLabel={ariaLabel}
              buttons={buttons}
              className={className}
              content={content}
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
