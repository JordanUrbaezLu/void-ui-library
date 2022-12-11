import * as React from "react";
import styles from "./AstroCalendar.module.scss";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import {
  getCalendarDays,
  getNextDay,
  getNextWeek,
  getPreviousDay,
  getPreviousWeek,
} from "./astroCalendarUtilities";

export interface AstroCalendarProps {
  customDate?: Date;
}

const AstroCalendar: React.FC<AstroCalendarProps> = ({
  customDate = new Date(),
}) => {
  const [date, setDate] = React.useState<Date>(customDate);
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
    <div className={styles.astroCalendarContainer}>
      <div className={styles.astroCalendarNavigationContainer}>
        <IoChevronBackSharp
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              decreaseMonth();
            }
          }}
          onClick={decreaseMonth}
        />
        <div className={styles.astroCalendarNavigationMonth}>
          {`${date.toLocaleString("en-US", {
            month: "long",
          })} ${date.getFullYear()}`}
        </div>
        <IoChevronForwardSharp
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              increaseMonth();
            }
          }}
          onClick={increaseMonth}
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
              <div
                className={styles.astroCalendarDay}
                tabIndex={day === date.getDate() ? 0 : -1}
                onKeyDown={(event) => {
                  const { code } = event;

                  const keyCodesToGet = {
                    ArrowUp: getPreviousWeek,
                    ArrowDown: getNextWeek,
                    ArrowLeft: getPreviousDay,
                    ArrowRight: getNextDay,
                  };

                  if (code in keyCodesToGet) {
                    setDate(keyCodesToGet[code]);
                  }
                }}
                key={index}
                ref={(el) => (daysRefs.current[day] = el)}
              >
                {day}
              </div>
            );
          } else {
            return <div className={styles.astroCalendarDay} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default AstroCalendar;
