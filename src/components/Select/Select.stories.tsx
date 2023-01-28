import { Story } from "@storybook/react";
import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";

export default {
  component: Select,
  title: "Components/Select",
};

const Template: Story<SelectProps> = (args) => {
  return (
    <Select startsOpen {...args}>
      <SelectItem>30</SelectItem>
      <SelectItem>40</SelectItem>
      <SelectItem>50</SelectItem>
    </Select>
  );
};

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  label: "Age",
};
