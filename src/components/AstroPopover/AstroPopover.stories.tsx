import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroPopover from "./AstroPopover";
import AstroButton from "../AstroButton/AstroButton";

export default {
  title: "AstroPopover",
  componet: AstroPopover,
} as ComponentMeta<typeof AstroPopover>;

const Template: ComponentStory<typeof AstroPopover> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <AstroPopover
      isOpen={isOpen}
      {...args}
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
};

export const AllProps = Template.bind({});
AllProps.args = {
  text: "I am a Popover with very long text!",
  position: "top",
  hasNubbin: true,
};
