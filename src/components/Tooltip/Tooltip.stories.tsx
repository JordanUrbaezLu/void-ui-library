import { Story } from "@storybook/react";
import { Tooltip, TooltipProps } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
};

const Template: Story<
  Omit<TooltipProps, "children" | "startsOpen" | "trigger">
> = (args) => {
  return (
    <Tooltip
      {...args}
      startsOpen
      trigger={<Button variant="secondary">Hover Me!</Button>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Tooltip",
};

export const TopPosition = Template.bind({});
TopPosition.args = {
  text: "Tooltip",
  position: "top",
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  text: "Tooltip",
  position: "bottom",
};

export const TopPositionAndNubbin = Template.bind({});
TopPositionAndNubbin.args = {
  text: "Tooltip",
  position: "top",
  hasNubbin: true,
};

export const BottomPositionAndNubbin = Template.bind({});
BottomPositionAndNubbin.args = {
  text: "Tooltip",
  position: "bottom",
  hasNubbin: true,
};

export const LongText = Template.bind({});
LongText.args = {
  text: "I pop up when you hover over my trigger!",
  position: "bottom",
};

export const AllProps = Template.bind({});
AllProps.args = {
  text: "I pop up when you hover over my trigger!",
  position: "top",
  hasNubbin: true,
};
