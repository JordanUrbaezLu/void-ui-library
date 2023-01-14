import { Story } from "@storybook/react";
import * as React from "react";
import AstroMenu, { AstroMenuProps } from "./AstroMenu";
import AstroMenuItem from "./AstroMenuItem";
import AstroButton from "../AstroButton/AstroButton";

export default {
  component: AstroMenu,
  title: "Components/AstroMenu",
};

const Template: Story<Omit<AstroMenuProps, "children">> = (args) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <>
      <div
        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}
      >
        Value: {value}
      </div>
      <AstroMenu setValue={setValue} {...args}>
        <AstroMenuItem>Menu Item One</AstroMenuItem>
        <AstroMenuItem>Menu Item Two</AstroMenuItem>
        <AstroMenuItem>Menu Item Three</AstroMenuItem>
        <AstroMenuItem>Menu Item Four</AstroMenuItem>
      </AstroMenu>
    </>
  );
};

export const Default = Template.bind({});

export const AstroButtonTrigger = Template.bind({});
AstroButtonTrigger.args = {
  trigger: <AstroButton>Trigger</AstroButton>,
};
