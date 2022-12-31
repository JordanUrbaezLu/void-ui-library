import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroCalendar.module.scss";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import {
  getCalendarDays,
  getNextDay,
  getNextWeek,
  getPreviousDay,
  getPreviousWeek,
} from "../../utility/calendarUtilities";
import FocusTrap from "focus-trap-react";

export interface AstroCalendarProps {
  selectedDate?: Date;
  onSetDate: (date: Date) => void;
  isOpen: boolean;
}

const AstroCalendar: React.FC<AstroCalendarProps> = ({
  selectedDate = new Date(),
  onSetDate,
  isOpen,
}) => {
  const [date, setDate] = React.useState<Date>(selectedDate);
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
    console.log("Focus")
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
        <div
          className={styles.astroCalendarContainer}
          onKeyDown={(event) => {
            if (event.code === "Escape") {
              onSetDate(selectedDate);
            }
          }}
        >
          <div className={styles.astroCalendarNavigationContainer}>
            <IoChevronBackSharp
              className={styles.astroCalendarNavigationIcon}
              onClick={decreaseMonth}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  decreaseMonth();
                }
              }}
              tabIndex={0}
            />
            <div className={styles.astroCalendarNavigationMonth}>
              {`${date.toLocaleString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </div>
            <IoChevronForwardSharp
              className={styles.astroCalendarNavigationIcon}
              onClick={increaseMonth}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  increaseMonth();
                }
              }}
              tabIndex={0}
            />
          </div>
          <div className={styles.astroCalendarHeaderContainer}>
            {headerLabels.map((label, index) => {
              return (
                <div className={styles.astroCalendarHeaderLabel} key={index}>
                  {label}
                </div>
              );
            })}
          </div>
          <div className={styles.astroCalendarBodyContainer}>
            {days.map((day, index) => {
              if (day !== null) {
                return (
                  <div className={styles.astroCalendarDayContainer}>
                    <div
                      className={styles.astroCalendarDay}
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
                      key={index}
                      ref={(el) => (daysRefs.current[day] = el)}
                    >
                      {day}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.astroCalendarDayContainer}
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

export default AstroCalendar;
