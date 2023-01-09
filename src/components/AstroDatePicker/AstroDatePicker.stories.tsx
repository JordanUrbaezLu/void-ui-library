import { Story } from "@storybook/react";
import * as React from "react";
import AstroDatePicker, { AstroDatePickerProps } from "./AstroDatePicker";

export default {
  component: AstroDatePicker,
  title: "Components/AstroDatePicker",
};

const Template: Story<AstroDatePickerProps> = () => {
  const [value, setValue] = React.useState<string>("");
  return <AstroDatePicker setValue={setValue} value={value} />;
};

export const Default = Template.bind({});
Default.parameters = {
  layout: "padded",
};