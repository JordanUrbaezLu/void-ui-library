import * as React from "react";
import { Story } from "@storybook/react";
import { Popover, PopoverProps } from "./Popover";
import { Button } from "../Button/Button";

export default {
  component: Popover,
  title: "Components/Popover",
};

const Template: Story<
  Omit<PopoverProps, "children" | "isOpen" | "toggleOpen" | "trigger">
> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Popover
      {...args}
      isOpen={isOpen}
      toggleOpen={() => setIsOpen(!isOpen)}
      trigger={
        <Button onClick={() => setIsOpen(!isOpen)}>Trigger</Button>
      }
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Popover",
};

export const TopPosition = Template.bind({});
TopPosition.args = {
  text: "Popover",
  position: "top",
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  text: "Popover",
  position: "bottom",
};

export const TopPositionAndNubbin = Template.bind({});
TopPositionAndNubbin.args = {
  text: "Popover",
  position: "top",
  hasNubbin: true,
};

export const BottomPositionAndNubbin = Template.bind({});
BottomPositionAndNubbin.args = {
  text: "Popover",
  position: "bottom",
  hasNubbin: true,
};

export const LongText = Template.bind({});
LongText.args = {
  text: "I am a Popover with very long text!",
  position: "bottom",
};

export const AllProps = Template.bind({});
AllProps.args = {
  text: "I am a Popover with very long text!",
  position: "top",
  hasNubbin: true,
};