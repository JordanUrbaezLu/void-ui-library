import * as React from "react";
import { Story } from "@storybook/react";
import AstroPopover, { AstroPopoverProps } from "./AstroPopover";
import AstroButton from "../AstroButton/AstroButton";

export default {
  component: AstroPopover,
  title: "Components/AstroPopover",
};

const Template: Story<
  Omit<
    AstroPopoverProps,
    "children" | "isOpen" | "toggleOpen" | "trigger"
  >
> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <AstroPopover
      {...args}
      isOpen={isOpen}
      toggleOpen={() => setIsOpen(!isOpen)}
      trigger={
        <AstroButton onClick={() => setIsOpen(!isOpen)}>Trigger</AstroButton>
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
