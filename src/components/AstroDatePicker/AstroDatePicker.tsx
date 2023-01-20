import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/calendarUtilities";
import AstroDatePickerCalendar from "./AstroDatePickerCalendar";
import AstroTextField from "../AstroTextField/AstroTextField";
import styles from "./AstroDatePicker.module.scss";

export interface AstroDatePickerProps {
  /**
   * The selected date for the Astro Date Picker
   */
  selectedDate?: Date;
  /**
   * The callback fired when requested to change the value for the AstroDatePicker
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * The value for the AstroDatePicker
   */
  value?: string;
}

const AstroDatePicker: React.FC<AstroDatePickerProps> = (props) => {
  const { selectedDate, setValue, value } = props;

  const [selected, setSelected] =
    React.useState<Date | undefined>(selectedDate);
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const setDate = (date: Date) => {
    setValue(getDateString(date));
    setSelected(date);
    setShowCalendar((prev) => !prev);
  };

  return (
    <>
      <AstroTextField
        onChange={() => {}}
        trailingIcon={
          <AiFillCalendar
            className={styles.astroDatePickerIconContainer}
            onClick={() => setShowCalendar(!showCalendar)}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                setShowCalendar(!showCalendar);
              }
            }}
            tabIndex={0}
          />
        }
        value={value}
      />
      <AstroDatePickerCalendar
        isOpen={showCalendar}
        onSetDate={setDate}
        selectedDate={selected}
      />
    </>
  );
};

export default AstroDatePicker;
