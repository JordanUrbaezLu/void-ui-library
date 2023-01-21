import { Story } from "@storybook/react";
import * as React from "react";
import AstroMenu, { AstroMenuProps } from "./AstroMenu";
import AstroMenuItem from "./AstroMenuItem";
import AstroButton from "../AstroButton/AstroButton";

export default {
  component: AstroMenu,
  title: "Components/AstroMenu",
};

const Template: Story<
  Omit<
    AstroMenuProps,
    "children" | "isOpen" | "onClose" | "onOpen" | "trigger"
  >
> = (args) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <>
      <div
        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}
      >
        Value: {value}
      </div>
      <AstroMenu
        {...args}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={(itemValue) => {
          setIsOpen(false);
          if (itemValue !== undefined) {
            setValue(itemValue);
          }
        }}
        trigger={<AstroButton>Trigger</AstroButton>}
      >
        <AstroMenuItem>Menu Item One</AstroMenuItem>
        <AstroMenuItem>Menu Item Two</AstroMenuItem>
        <AstroMenuItem>Menu Item Three</AstroMenuItem>
        <AstroMenuItem>Menu Item Four</AstroMenuItem>
      </AstroMenu>
    </>
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
