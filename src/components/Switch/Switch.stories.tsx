import { Story } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
  title: "Components/Switch",
};

const Template: Story<Omit<SwitchProps, "isOn" | "onClick">> = (
  args
) => {
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: " Switch Label",
};
