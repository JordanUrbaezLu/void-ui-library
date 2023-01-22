import { Story } from "@storybook/react";
import { AstroLink, AstroLinkProps } from "./AstroLink";

export default {
  component: AstroLink,
  title: "Components/AstroLink",
};

const Template: Story<Omit<AstroLinkProps, "children" | "href">> = (args) => {
  return (
    <AstroLink children="Google.com" href="https://www.google.com/" {...args} />
  );
};

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
