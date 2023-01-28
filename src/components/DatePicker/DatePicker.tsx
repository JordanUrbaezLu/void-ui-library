import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/getDatePickerCalendarUtilities";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { TextField } from "../TextField/TextField";
import styles from "./DatePicker.module.scss";
import { DatePickerContext } from "./DatePickerContext";

export interface DatePickerProps {
  /**
   * The selected date for the DatePicker
   */
  selected?: Date;
  /**
   * The callback fired when requested to change the value for the DatePicker
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * If the DatePicker initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
  /**
   * The value for the DatePicker
   */
  value?: string;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const { selected, setValue, startsOpen = false, value } = props;

  const [selectedDate, setSelectedDate] =
    React.useState<Date | undefined>(selected);
  const [showCalendar, setShowCalendar] = React.useState<boolean>(startsOpen);

  React.useEffect(() => {
    setValue(getDateString(selectedDate));
  }, [selectedDate]);

  return (
    <DatePickerContext.Provider
      value={{ selectedDate: selectedDate, setSelectedDate: setSelectedDate }}
    >
      <TextField
        className={styles.customInput}
        onChange={() => {}}
        value={value}
        label="Select a Date"
        trailingIcon={
          <div style={{ maxWidth: "34px", maxHeight: "34px" }} ref={triggerRef}>
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

      <DatePickerCalendar
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        triggerRef={triggerRef}
      />
    </DatePickerContext.Provider>
  );
};
