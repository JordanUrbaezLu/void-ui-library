import { Story } from "@storybook/react";
import * as React from "react";
import { Menu, MenuProps } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Button } from "../Button/Button";
import { MenuSeparator } from "./MenuSeparator";
import { MenuHeader } from "./MenuHeader";

export default {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  title: "Components/Menu",
};

const Template: Story<
  Omit<
    MenuProps,
    "children" | "isOpen" | "onClose" | "onOpen" | "trigger"
  >
> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button variant="secondary">Click Me!</Button>}
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
AlignmentBottomLeft.storyName = "Alignment: Bottom Left";

export const AlignmentBottomRight = Template.bind({});
AlignmentBottomRight.args = {
  alignment: "bottomRight",
};
AlignmentBottomRight.storyName = "Alignment: Bottom Right";

export const AlignmentBottomCenter = Template.bind({});
AlignmentBottomCenter.args = {
  alignment: "bottomCenter",
};
AlignmentBottomCenter.storyName = "Alignment: Bottom Center";

export const AlignmentTopLeft = Template.bind({});
AlignmentTopLeft.args = {
  alignment: "topLeft",
};
AlignmentTopLeft.storyName = "Alignment: Top Left";

export const AlignmentTopRight = Template.bind({});
AlignmentTopRight.args = {
  alignment: "topRight",
};
AlignmentTopRight.storyName = "Alignment: Top Right";

export const AlignmentTopCenter = Template.bind({});
AlignmentTopCenter.args = {
  alignment: "topCenter",
};
AlignmentTopCenter.storyName = "Alignment: Top Center";

export const WithDividerAndHeader = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Menu
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Click Me!</Button>}
    >
      <MenuItem>New File</MenuItem>
      <MenuItem>New Folder</MenuItem>
      <MenuItem>Save As</MenuItem>
      <MenuSeparator />
      <MenuHeader>Edit</MenuHeader>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuSeparator />
      <MenuItem>Print</MenuItem>
    </Menu>
  );
};
