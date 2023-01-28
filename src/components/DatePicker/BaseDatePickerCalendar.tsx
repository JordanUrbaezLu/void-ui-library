import * as React from "react";
import styles from "./BaseDatePickerCalendar.module.scss";
import classNames from "classnames";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import {
  getCalendarDays,
  getNextDay,
  getNextWeek,
  getPreviousDay,
  getPreviousWeek,
} from "../../utility/getDatePickerCalendarUtilities";
import { DatePickerContext } from "./DatePickerContext";
import { Button } from "../Button";
import FocusTrap from "focus-trap-react";

export interface BaseDatePickerCalendarProps {
  /**
   * The callback fired when the DatePickerCalendar requests to close
   */
  onClose: () => void;
  /**
   * The trigger ref for the DatePicker
   */
  triggerRef: React.RefObject<HTMLDivElement>;
}

export const BaseDatePickerCalendar: React.FC<BaseDatePickerCalendarProps> = (
  props
) => {
  const { onClose, triggerRef } = props;
  const { selectedDate, setSelectedDate } = React.useContext(DatePickerContext);
  const [date, setDate] = React.useState<Date>(selectedDate ?? new Date());
  const [focusedDate, setFocusedDate] = React.useState<number>(0);
  const [days, setDays] = React.useState<Array<number | null>>([]);
  const daysRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  const headerLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const increaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };

  const decreaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  };

  React.useEffect(() => {
    setDays(getCalendarDays(date));
    setFocusedDate(date.getDate());
  }, [date]);

  React.useEffect(() => {
    daysRefs.current[focusedDate]?.focus();
  }, [focusedDate]);

  useOnClickOutside([calendarRef, triggerRef], () => onClose());

  return (
    <FocusTrap
      focusTrapOptions={{
        allowOutsideClick: true,
        escapeDeactivates: false,
      }}
    >
      <div className={styles.datePickerCalendarContainer} ref={calendarRef}>
        <div className={styles.datePickerCalendarNavigationContainer}>
          <IoChevronBackSharp
            className={styles.datePickerCalendarNavigationIcon}
            onClick={decreaseMonth}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                decreaseMonth();
              }
            }}
            tabIndex={0}
          />
          <div className={styles.datePickerCalendarNavigationMonth}>
            {`${date.toLocaleString("en-US", {
              month: "long",
            })} ${date.getFullYear()}`}
          </div>
          <IoChevronForwardSharp
            className={styles.datePickerCalendarNavigationIcon}
            onClick={increaseMonth}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                increaseMonth();
              }
            }}
            tabIndex={0}
          />
        </div>
        <div className={styles.datePickerCalendarHeaderContainer}>
          {headerLabels.map((label, index) => {
            return (
              <div className={styles.datePickerCalendarHeaderLabel} key={index}>
                {label}
              </div>
            );
          })}
        </div>
        <div className={styles.datePickerCalendarBodyContainer}>
          {days.map((day, index) => {
            if (day !== null) {
              const isSelected =
                new Date(date.getFullYear(), date.getMonth(), day).getTime() ===
                selectedDate?.getTime();

              const isToday =
                new Date(date.getFullYear(), date.getMonth(), day).getTime() ===
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  new Date().getDate()
                ).getTime();

              return (
                <div
                  className={styles.datePickerCalendarDayContainer}
                  key={index}
                >
                  <div
                    className={classNames(
                      styles.datePickerCalendarDay,
                      isSelected && styles.selected,
                      isToday && styles.today
                    )}
                    tabIndex={day === date.getDate() ? 0 : -1}
                    onClick={() => {
                      setSelectedDate(
                        new Date(date.getFullYear(), date.getMonth(), day)
                      );
                      onClose();
                    }}
                    onKeyDown={(event) => {
                      const { code } = event;

                      const keyCodesToGet = {
                        ArrowUp: getPreviousWeek,
                        ArrowDown: getNextWeek,
                        ArrowLeft: getPreviousDay,
                        ArrowRight: getNextDay,
                      };

                      if (code in keyCodesToGet) {
                        event.preventDefault();
                        setDate(keyCodesToGet[code]);
                      }

                      if (code === "Enter") {
                        setSelectedDate(
                          new Date(date.getFullYear(), date.getMonth(), day)
                        );
                        onClose();
                      }
                    }}
                    ref={(el) => (daysRefs.current[day] = el)}
                  >
                    {day}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className={styles.datePickerCalendarDayContainer}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => setSelectedDate(undefined)}>Clear</Button>
        </div>
      </div>
    </FocusTrap>
  );
};
