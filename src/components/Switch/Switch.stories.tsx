import { Story } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
  title: "Components/Switch",
};

const Template: Story<Omit<SwitchProps, "isOn" | "onClick">> = (args) => {
  const [switchState, toggleSwitchState] =
    React.useState<boolean>(true);

  return (
    <Switch
      {...args}
      isOn={switchState}
      onClick={() => toggleSwitchState(!switchState)}
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
  label: " Switch Label",
  variant: "primary",
};

export const SecondaryAndLabel = Template.bind({});
SecondaryAndLabel.args = {
  label: " Switch Label",
  variant: "secondary",
};
