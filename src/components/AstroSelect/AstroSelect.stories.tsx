import { Story } from "@storybook/react";
import { AstroSelect, AstroSelectProps } from "./AstroSelect";
import { AstroSelectItem } from "./AstroSelectItem";

export default {
  component: AstroSelect,
  title: "Components/AstroSelect",
};

const Template: Story<AstroSelectProps> = (args) => {
  return (
    <AstroSelect {...args}>
      <AstroSelectItem>30</AstroSelectItem>
      <AstroSelectItem>40</AstroSelectItem>
      <AstroSelectItem>50</AstroSelectItem>
    </AstroSelect>
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

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Label = Template.bind({});
Label.args = {
  label: "Age",
};

export const AllProps = Template.bind({});
AllProps.args = {
  variant: "secondary",
  size: "large",
  label: "Age",
};
