import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/calendarUtilities";
import AstroCalendar from "../AstroCalendar/AstroCalendar";
import AstroTextField from "../AstroTextField/AstroTextField";
import styles from "./AstroDatePicker.module.scss";

export interface AstroDatePickerProps {
  children?: React.ReactNode;
}

const AstroDatePicker: React.FC<AstroDatePickerProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const setValue = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar((prev) => !prev);
  };

  return (
    <>
      <AstroTextField
        trailingIcon={
          <AiFillCalendar
            onClick={() => setShowCalendar(!showCalendar)}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                setShowCalendar(!showCalendar);
              }
            }}
            tabIndex={0}
          />
        }
        value={getDateString(selectedDate)}
      />
        <AstroCalendar
          isOpen={showCalendar}
          onSetDate={setValue}
          selectedDate={selectedDate}
        />

      {children}
    </>
  );
};

export default AstroDatePicker;
