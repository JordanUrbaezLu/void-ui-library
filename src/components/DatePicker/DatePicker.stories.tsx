import { Story } from "@storybook/react";
import * as React from "react";
import { DatePicker, DatePickerProps } from "./DatePicker";

export default {
  component: DatePicker,
  title: "Components/DatePicker",
};

const Template: Story<DatePickerProps> = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <DatePicker
      selected={new Date(2022, 5, 2)}
      setValue={setValue}
      startsOpen
      value={value}
    />
  );
};

export const Default = Template.bind({});
Default.parameters = {
  layout: "padded",
};
