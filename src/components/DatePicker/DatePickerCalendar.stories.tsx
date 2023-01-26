import { Story } from "@storybook/react";
import {
  DatePickerCalendar,
  DatePickerCalendarProps,
} from "./DatePickerCalendar";

export default {
  component: DatePickerCalendar,
  title: "Components/DatePickerCalendar",
};

const Template: Story<
  Omit<DatePickerCalendarProps, "isOpen" | "onSetDate">
> = (args) => {
  return <DatePickerCalendar isOpen onSetDate={() => null} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  selectedDate: new Date(2019, 5, 9),
};
Default.parameters = {
  layout: "padded",
};
