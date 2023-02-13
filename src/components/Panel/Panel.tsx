import * as React from "react";
import styles from "./Panel.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { BasePanel, BasePanelProps } from "./BasePanel";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { CSSTransition } from "react-transition-group";

export interface PanelProps extends BasePanelProps {
  /**
   * If the Panel has an overlay
   *
   * @default true
   */
  hasOverlay?: boolean;
  /**
   * If the Panel is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Panel opens
   */
  onOpen: () => void;
  /**
   * The trigger for the Panel
   */
  trigger: React.ReactElement;
}

/**
 * @public
 */
export const Panel: React.FC<PanelProps> = (props) => {
  const {
    ariaLabel = "Panel",
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
          <div className={styles.panelBackground}>
            <BasePanel
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
