import { Story } from "@storybook/react";
import * as React from "react";
import { Menu, MenuProps } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Button } from "../Button/Button";

export default {
  component: Menu,
  title: "Components/Menu",
};

const Template: Story<
  Omit<MenuProps, "children" | "isOpen" | "onClose" | "onOpen" | "trigger">
> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button variant="secondary">Trigger</Button>}
    >
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
      <MenuItem>Menu Item Four</MenuItem>
    </Menu>
  );
};

export const Default = Template.bind({});

export const AlignmentBottomLeft = Template.bind({});
AlignmentBottomLeft.args = {
  alignment: "bottomLeft",
};

export const AlignmentBottomRight = Template.bind({});
AlignmentBottomRight.args = {
  alignment: "bottomRight",
};

export const AlignmentBottomCenter = Template.bind({});
AlignmentBottomCenter.args = {
  alignment: "bottomCenter",
};

export const AlignmentTopLeft = Template.bind({});
AlignmentTopLeft.args = {
  alignment: "topLeft",
};

export const AlignmentTopRight = Template.bind({});
AlignmentTopRight.args = {
  alignment: "topRight",
};

export const AlignmentTopCenter = Template.bind({});
AlignmentTopCenter.args = {
  alignment: "topCenter",
};
