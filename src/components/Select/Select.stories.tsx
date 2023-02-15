import { Story } from "@storybook/react";
import * as React from "react";
import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";

export default {
  component: Select,
  title: "Components/Select",
};

const Template: Story<
  Omit<SelectProps, "children" | "isOpen" | "onClose" | "onOpen">
> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Select
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <SelectItem>CA</SelectItem>
      <SelectItem>MA</SelectItem>
      <SelectItem>FL</SelectItem>
    </Select>
  );
};

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "State",
};

export const Selected = Template.bind({});
Selected.args = {
  selected: 1,
};

export const WithManySelectItems = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Select
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <SelectItem>10</SelectItem>
      <SelectItem>20</SelectItem>
      <SelectItem>30</SelectItem>
      <SelectItem>40</SelectItem>
      <SelectItem>50</SelectItem>
      <SelectItem>60</SelectItem>
      <SelectItem>70</SelectItem>
      <SelectItem>80</SelectItem>
      <SelectItem>90</SelectItem>
    </Select>
  );
};
