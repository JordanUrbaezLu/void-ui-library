import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { getDateString } from "../../utility/getDatePickerCalendarUtilities";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { TextField } from "../TextField/TextField";
import styles from "./DatePicker.module.scss";
import { DatePickerContext } from "./DatePickerContext";
import { IconButton } from "../IconButton/IconButton";

export interface DatePickerProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The initial selected date for the DatePicker
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
  const {
    className,
    selected,
    setValue,
    startsOpen = false,
    value,
    ...rest
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);

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
      <div className={className} {...rest}>
        <TextField
          className={styles.customInput}
          onChange={() => {}}
          value={value}
          label="Select a Date"
          trailingIcon={
            <IconButton
              content={<AiFillCalendar />}
              size="medium"
              onClick={() => setShowCalendar(!showCalendar)}
              ref={triggerRef}
            />
          }
        />
        <DatePickerCalendar
          isOpen={showCalendar}
          onClose={() => setShowCalendar(false)}
          triggerRef={triggerRef}
        />
      </div>
    </DatePickerContext.Provider>
  );
};
