import * as React from "react";
import styles from "./BaseBottomSheet.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import { TbX } from "react-icons/tb";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Divider } from "../Divider/Divider";
import classNames from "classnames";

export interface BaseBottomSheetProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the BottomSheet
   */
  ariaLabel?: string;
  /**
   * The buttons for the BottomSheet
   */
  buttons?: React.ReactNode;
  /**
   * The content for the BottomSheet
   */
  content: string;
  /**
   * The callback fired when the BottomSheet closes
   */
  onClose: () => void;
  /**
   * The title for the BottomSheet
   */
  title: string;
}

/**
 * @private
 */
export const BaseBottomSheet: React.FC<BaseBottomSheetProps> = (
  props
) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    onClose,
    title,
    ...rest
  } = props;

  const bottomSheetRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(bottomSheetRef, onClose);

  useOnKeyDown(["Escape"], onClose);

  return (
    <FocusTrap>
      <div
        aria-label={ariaLabel}
        className={classNames(className, styles.bottomSheetContainer)}
        ref={bottomSheetRef}
        role="dialog"
        {...rest}
      >
        <div className={styles.bottomSheetHeader}>
          <div className={styles.bottomSheetTitle}>{title}</div>
          <IconButton
            className={styles.bottomSheetIcon}
            content={<TbX />}
            onClick={onClose}
          />
        </div>
        <div className={styles.bottomSheetContent}>{content}</div>
        {buttons && (
          <>
            <Divider direction="horizontal" stroke={1} />
            <div className={styles.bottomSheetButtons}>{buttons}</div>
          </>
        )}
      </div>
    </FocusTrap>
  );
};
