import { Story } from "@storybook/react";
import { Popup, PopupProps } from "./Popup";
import { Button } from "../Button/Button";

export default {
  component: Popup,
  parameters: {
    layout: "centered",
  },
  title: "Components/Popup",
};

const Template: Story<
  Omit<PopupProps, "children" | "startsOpen" | "trigger">
> = (args) => {
  return (
    <Popup
      {...args}
      startsOpen
      trigger={<Button variant="secondary">Hover Me!</Button>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Popup!",
};

export const TopPosition = Template.bind({});
TopPosition.args = {
  text: "Popup!",
  position: "top",
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  text: "Popup!",
  position: "bottom",
};

export const TopPositionAndNubbin = Template.bind({});
TopPositionAndNubbin.args = {
  text: "Popup!",
  position: "top",
  hasNubbin: true,
};

export const BottomPositionAndNubbin = Template.bind({});
BottomPositionAndNubbin.args = {
  text: "Popup!",
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
