import { Story } from "@storybook/react";
import * as React from "react";
import { DatePicker, DatePickerProps } from "./DatePicker";

export default {
  component: DatePicker,
  title: "Components/DatePicker",
};

const Template: Story<DatePickerProps> = () => {
  const [value, setValue] = React.useState<string>("");
  return <DatePicker setValue={setValue} value={value} />;
};

export const Default = Template.bind({});
Default.parameters = {
  layout: "padded",
};
