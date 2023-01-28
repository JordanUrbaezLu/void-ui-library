import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/getDatePickerCalendarUtilities";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { TextField } from "../TextField/TextField";
import styles from "./DatePicker.module.scss";

export interface DatePickerProps {
  /**
   * The selected date for the DatePicker
   */
  selectedDate?: Date;
  /**
   * The callback fired when requested to change the value for the DatePicker
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * The value for the DatePicker
   */
  value?: string;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const { selectedDate, setValue, value } = props;

  const [selected, setSelected] =
    React.useState<Date | undefined>(selectedDate);
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const setDate = (date?: Date) => {
    if (date) {
      setValue(getDateString(date));
      setSelected(date);
      setShowCalendar((prev) => !prev);
    } else {
      setShowCalendar((prev) => !prev);
    }
  };

  return (
    <div className={styles.container}>
      <TextField onChange={() => {}} value={value} label="Select a Date" />
      <div ref={triggerRef}>
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
      <DatePickerCalendar
        isOpen={showCalendar}
        onClose={setDate}
        selectedDate={selected}
        triggerRef={triggerRef}
      />
    </div>
  );
};
