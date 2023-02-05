/* istanbul ignore file */
import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { TextField } from "../TextField";
import styles from "./DateRangePicker.module.scss";
import { DateRangePickerCalendars } from "./DateRangePickerCalendars";
import { DateRangePickerContext } from "./DateRangePickerContext";

export interface DateRangePickerProps {
  /**
   * The initial selected date for the DateRangePicker
   */
  selected?: Date;
  /**
   * If the DatePicker initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = (
  props
) => {
  const { selected, startsOpen = false } = props;

  const startTriggerRef = React.useRef<HTMLDivElement>(null);
  const endTriggerRef = React.useRef<HTMLDivElement>(null);

  const [selectedDate, setSelectedDate] =
    React.useState<Date | undefined>(selected);
  const [showCalendar, setShowCalendar] =
    React.useState<boolean>(startsOpen);

  return (
    <DateRangePickerContext.Provider
      value={{
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
      }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          className={styles.customInput}
          onChange={() => {}}
          label="Start Date"
          trailingIcon={
            <div
              style={{ maxWidth: "34px", maxHeight: "34px" }}
              ref={startTriggerRef}
            >
              <AiFillCalendar
                className={styles.datePickerIconContainer}
                onClick={() => setShowCalendar(!showCalendar)}
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    setShowCalendar(!showCalendar);
                  }
                }}
                size={21}
                tabIndex={0}
              />
            </div>
          }
        />
        <TextField
          className={styles.customInput}
          onChange={() => {}}
          label="End Date"
          trailingIcon={
            <div
              style={{ maxWidth: "34px", maxHeight: "34px" }}
              ref={endTriggerRef}
            >
              <AiFillCalendar
                className={styles.datePickerIconContainer}
                onClick={() => setShowCalendar(!showCalendar)}
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    setShowCalendar(!showCalendar);
                  }
                }}
                size={21}
                tabIndex={0}
              />
            </div>
          }
        />
      </div>
      <DateRangePickerCalendars
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        triggerRefs={[startTriggerRef, endTriggerRef]}
      />
    </DateRangePickerContext.Provider>
  );
};
