import * as React from "react";
import styles from "./BasePanel.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import { TbX } from "react-icons/tb";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Divider } from "../Divider/Divider";
import classNames from "classnames";

export interface BasePanelProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the Panel
   */
  ariaLabel?: string;
  /**
   * The buttons for the Panel
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Panel
   */
  content: string;
  /**
   * The callback fired when the Panel closes
   */
  onClose: () => void;
  /**
   * The title for the Panel
   */
  title: string;
}

/**
 * @private
 */
export const BasePanel: React.FC<BasePanelProps> = (props) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    onClose,
    title,
    ...rest
  } = props;

  const panelRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(panelRef, onClose);

  useOnKeyDown(["Escape"], onClose);

  return (
    <FocusTrap>
      <div
        aria-label={ariaLabel}
        className={classNames(className, styles.panelContainer)}
        ref={panelRef}
        role="dialog"
        {...rest}
      >
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>{title}</div>
          <IconButton
            className={styles.panelIcon}
            content={<TbX />}
            onClick={onClose}
          />
        </div>
        <Divider direction="horizontal" stroke={1} />
        <div className={styles.panelContent}>{content}</div>
        {buttons && (
          <div className={styles.panelButtonsContainer}>
            <Divider direction="horizontal" stroke={1} />
            <div className={styles.panelButtons}>{buttons}</div>
          </div>
        )}
      </div>
    </FocusTrap>
  );
};
