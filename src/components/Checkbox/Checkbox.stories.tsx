import { Story } from "@storybook/react";
import * as React from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
};

const Template: Story<Omit<CheckboxProps, "isOn" | "onClick">> = (
  args
) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Checkbox
      {...args}
      isChecked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
};

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const PrimaryAndLabel = Template.bind({});
PrimaryAndLabel.args = {
  label: "Checkbox Label",
  variant: "primary",
};

export const SecondaryAndLabel = Template.bind({});
SecondaryAndLabel.args = {
  label: "Checkbox Label",
  variant: "secondary",
};
