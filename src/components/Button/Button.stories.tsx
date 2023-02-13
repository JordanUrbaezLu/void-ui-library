import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";

export default {
  component: Button,
  title: "Components/Button",
};

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});

export const Size = () => {
  return (
    <FlexRowContainer>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </FlexRowContainer>
  );
};

export const Variant = () => {
  return (
    <FlexRowContainer>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </FlexRowContainer>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  leadingIcon: <AiOutlineArrowLeft />,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: <AiOutlineArrowRight />,
};

export const LeadingIconAndTrailingIcon = Template.bind({});
LeadingIconAndTrailingIcon.args = {
  leadingIcon: <AiOutlineArrowLeft />,
  trailingIcon: <AiOutlineArrowRight />,
};

export const AllProps = Template.bind({});
AllProps.args = {
  size: "large",
  variant: "secondary",
  leadingIcon: <AiOutlineArrowLeft />,
  trailingIcon: <AiOutlineArrowRight />,
};
