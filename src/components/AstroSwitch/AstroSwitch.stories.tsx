import { Story } from "@storybook/react";
import * as React from "react";
import { AstroSwitch, AstroSwitchProps } from "./AstroSwitch";

export default {
  component: AstroSwitch,
  title: "Components/AstroSwitch",
};

const Template: Story<Omit<AstroSwitchProps, "isOn" | "onClick">> = (args) => {
  const [astroSwitchState, toggleAstroSwitchState] =
    React.useState<boolean>(true);

  return (
    <AstroSwitch
      {...args}
      isOn={astroSwitchState}
      onClick={() => toggleAstroSwitchState(!astroSwitchState)}
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
  label: "Astro Switch Label",
  variant: "primary",
};

export const SecondaryAndLabel = Template.bind({});
SecondaryAndLabel.args = {
  label: "Astro Switch Label",
  variant: "secondary",
};
