import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroDatePickerCalendar.module.scss";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import {
  getCalendarDays,
  getNextDay,
  getNextWeek,
  getPreviousDay,
  getPreviousWeek,
} from "../../utility/getAstroDatePickerCalendarUtilities";
import FocusTrap from "focus-trap-react";
import classNames from "classnames";

export interface AstroDatePickerCalendarProps {
  /**
   * If the AstroDatePickerCalendar is open
   */
  isOpen: boolean;
  /**
   * The callback fired when requested to set the date for the AstroDatePickerCalendar
   */
  onSetDate: (date: Date) => void;
  /**
   * The selected date for the AstroDatePickerCalendar
   */
  selectedDate?: Date;
}

export const AstroDatePickerCalendar: React.FC<AstroDatePickerCalendarProps> = (
  props
) => {
  const { selectedDate, onSetDate, isOpen } = props;

  const [date, setDate] = React.useState<Date>(selectedDate ?? new Date());
  const [focusedDate, setFocusedDate] = React.useState<number>(0);
  const [days, setDays] = React.useState<Array<number | null>>([]);
  const daysRefs = React.useRef<Array<HTMLDivElement | null>>([]);

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
        <div className={styles.astroDatePickerCalendarContainer}>
          <div className={styles.astroDatePickerCalendarNavigationContainer}>
            <IoChevronBackSharp
              className={styles.astroDatePickerCalendarNavigationIcon}
              onClick={decreaseMonth}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  decreaseMonth();
                }
              }}
              tabIndex={0}
            />
            <div className={styles.astroDatePickerCalendarNavigationMonth}>
              {`${date.toLocaleString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </div>
            <IoChevronForwardSharp
              className={styles.astroDatePickerCalendarNavigationIcon}
              onClick={increaseMonth}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  increaseMonth();
                }
              }}
              tabIndex={0}
            />
          </div>
          <div className={styles.astroDatePickerCalendarHeaderContainer}>
            {headerLabels.map((label, index) => {
              return (
                <div
                  className={styles.astroDatePickerCalendarHeaderLabel}
                  key={index}
                >
                  {label}
                </div>
              );
            })}
          </div>
          <div className={styles.astroDatePickerCalendarBodyContainer}>
            {days.map((day, index) => {
              if (day !== null) {
                const isSelected =
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    day
                  ).getTime() === selectedDate?.getTime();

                return (
                  <div
                    className={styles.astroDatePickerCalendarDayContainer}
                    key={index}
                  >
                    <div
                      className={classNames(
                        styles.astroDatePickerCalendarDay,
                        isSelected && styles.selected
                      )}
                      tabIndex={day === date.getDate() ? 0 : -1}
                      onClick={() =>
                        onSetDate(
                          new Date(date.getFullYear(), date.getMonth(), day)
                        )
                      }
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
                          onSetDate(
                            new Date(date.getFullYear(), date.getMonth(), day)
                          );
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
                    className={styles.astroDatePickerCalendarDayContainer}
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>
      </FocusTrap>
    </CSSTransition>
  );
};
