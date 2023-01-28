import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./DatePickerCalendar.module.scss";
import FocusTrap from "focus-trap-react";

import { BaseDatePickerCalendar } from "./BaseDatePickerCalendar";

export interface DatePickerCalendarProps {
  /**
   * If the DatePickerCalendar is open
   */
  isOpen: boolean;
  /**
   * The callback fired when the DatePickerCalendar requests to close
   */
  onClose: (date?: Date) => void;
  /**
   * The selected date for the DatePickerCalendar
   */
  selectedDate?: Date;
  /**
   * The trigger ref for the DatePicker
   */
  triggerRef: React.RefObject<HTMLDivElement>;
}

export const DatePickerCalendar: React.FC<DatePickerCalendarProps> = (
  props
) => {
  const { selectedDate, onClose, isOpen, triggerRef } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <FocusTrap
        focusTrapOptions={{
          allowOutsideClick: true,
          escapeDeactivates: false,
        }}
      >
        <BaseDatePickerCalendar
          onClose={onClose}
          selectedDate={selectedDate}
          triggerRef={triggerRef}
        />
      </FocusTrap>
    </CSSTransition>
  );
};
