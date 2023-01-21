import { Story } from "@storybook/react";
import * as React from "react";
import AstroCheckbox, { AstroCheckboxProps } from "./AstroCheckbox";

export default {
  component: AstroCheckbox,
  title: "Components/AstroCheckbox",
};

const Template: Story<Omit<AstroCheckboxProps, "isOn" | "onClick">> = (
  args
) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <AstroCheckbox
      {...args}
      isChecked={isChecked}
      onClick={() => {
        console.log("clicked");
        setIsChecked(!isChecked);
      }}
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
  label: "Astro Checkbox Label",
  variant: "primary",
};

export const SecondaryAndLabel = Template.bind({});
SecondaryAndLabel.args = {
  label: "Astro Checkbox Label",
  variant: "secondary",
};

