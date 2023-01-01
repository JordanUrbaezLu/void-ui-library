import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/calendarUtilities";
import AstroDatePickerCalendar from "./AstroDatePickerCalendar";
import AstroTextField from "../AstroTextField/AstroTextField";
import styles from "./AstroDatePicker.module.scss";

export interface AstroDatePickerProps {
  /**
   * The callback fired when requested to change the value for the AstroDatePicker
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * The value for the AstroDatePicker
   */
  value?: string;
}

const AstroDatePicker: React.FC<AstroDatePickerProps> = ({
  setValue,
  value,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const setDate = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar((prev) => !prev);
  };

  React.useEffect(() => {
    setValue(getDateString(selectedDate));
  }, [selectedDate]);

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
        selectedDate={selectedDate}
      />
    </>
  );
};

export default AstroDatePicker;
