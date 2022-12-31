import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroDatePicker from "./AstroDatePicker";

export default {
  title: "Components/AstroDatePicker",
  component: AstroDatePicker,
} as ComponentMeta<typeof AstroDatePicker>;

const Template: ComponentStory<typeof AstroDatePicker> = (args) => {
  return <AstroDatePicker {...args} />;
};

export const Default = Template.bind({});
