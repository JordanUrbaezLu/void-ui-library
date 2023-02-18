import { Story } from "@storybook/react";
import * as React from "react";
import { DatePicker, DatePickerProps } from "./DatePicker";
import { within, userEvent } from "@storybook/testing-library";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: DatePicker,
  parameters: {
    chromatic: { delay: 2000 },
  },
  title: "Components/DatePicker",
};

const Template: Story<DatePickerProps> = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <DatePicker
      selected={new Date(2022, 5, 2)}
      setValue={setValue}
      value={value}
    />
  );
};

export const Default = Template.bind({});
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
