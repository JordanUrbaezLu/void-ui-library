import { Story } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  component: Link,
  title: "Components/Link",
};

const Template: Story<Omit<LinkProps, "children" | "href">> = (args) => {
  return (
    <Link children="Google.com" href="https://www.google.com/" {...args} />
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
