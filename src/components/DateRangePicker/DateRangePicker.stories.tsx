import { Story } from "@storybook/react";
import {
  DateRangePicker,
  DateRangePickerProps,
} from "./DateRangePicker";

export default {
  component: DateRangePicker,
  title: "Components/DateRangePicker",
};

const Template: Story<DateRangePickerProps> = () => {
  return (
    <DateRangePicker selected={new Date(2022, 5, 2)} startsOpen />
  );
};

export const Default = Template.bind({});
