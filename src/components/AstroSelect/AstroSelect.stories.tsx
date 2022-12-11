import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroSelect from "./AstroSelect";
import AstroSelectItem from "./AstroSelectItem";

export default {
  title: "Components/AstroSelect",
  component: AstroSelect,
} as ComponentMeta<typeof AstroSelect>;

const Template: ComponentStory<typeof AstroSelect> = (args) => {
  return (
    <AstroSelect {...args}>
      <AstroSelectItem value="30" />
      <AstroSelectItem value="40" />
      <AstroSelectItem value="50" />
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

export const Width = Template.bind({});
Width.args = {
  width: 500,
};

export const AllProps = Template.bind({});
AllProps.args = {
  variant: "secondary",
  size: "large",
  label: "Age",
  width: 100,
};
