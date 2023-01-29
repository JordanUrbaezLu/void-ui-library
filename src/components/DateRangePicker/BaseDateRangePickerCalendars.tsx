import * as React from "react";
import styles from "./BaseDateRangePickerCalendars.module.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import FocusTrap from "focus-trap-react";

export interface BaseDateRangePickerCalendarsProps {
  /**
   * The callback fired when the DatePickerCalendar requests to close
   */
  onClose: () => void;
  /**
   * The trigger ref for the DatePicker
   */
  triggerRefs: React.RefObject<HTMLDivElement>[];
}

export const BaseDateRangePickerCalendars: React.FC<BaseDateRangePickerCalendarsProps> =
  (props) => {
    const { onClose, triggerRefs } = props;

    const calendarsRef = React.useRef<HTMLDivElement>(null);

    useOnClickOutside([calendarsRef, ...triggerRefs], () => onClose());

    return (
      <FocusTrap
        focusTrapOptions={{
          allowOutsideClick: true,
          escapeDeactivates: false,
        }}
      >
        <div
          className={styles.dateRangePickerCalendarsContainer}
          ref={calendarsRef}
        >
          <button>DateRangePicker</button>
        </div>
      </FocusTrap>
    );
  };
