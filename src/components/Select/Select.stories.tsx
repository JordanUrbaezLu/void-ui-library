import { Story } from "@storybook/react";
import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";

export default {
  component: Select,
  title: "Components/Select",
};

const Template: Story<SelectProps> = (args) => {
  return (
    <Select {...args}>
      <SelectItem>30</SelectItem>
      <SelectItem>40</SelectItem>
      <SelectItem>50</SelectItem>
    </Select>
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
