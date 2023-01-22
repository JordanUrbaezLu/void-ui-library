import { Story } from "@storybook/react";
import {
  AstroDatePickerCalendar,
  AstroDatePickerCalendarProps,
} from "./AstroDatePickerCalendar";

export default {
  component: AstroDatePickerCalendar,
  title: "Components/AstroDatePickerCalendar",
};

const Template: Story<
  Omit<AstroDatePickerCalendarProps, "isOpen" | "onSetDate">
> = (args) => {
  return <AstroDatePickerCalendar isOpen onSetDate={() => null} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  selectedDate: new Date(2019, 5, 9),
};
Default.parameters = {
  layout: "padded",
};
