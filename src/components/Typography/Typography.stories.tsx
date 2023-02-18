import { Typography, TypographyProps } from "./Typography";
import { Story } from "@storybook/react";

export default {
  component: Typography,
  title: "Components/Typography",
};

const Template: Story<
  Omit<TypographyProps, "children"> &
    Pick<Partial<TypographyProps>, "children">
> = (args) => <Typography children="" {...args} variant="secondary" />;

export const VariantH1 = Template.bind({});
VariantH1.args = {
  children: "h1. Typography",
  type: "h1",
};
VariantH1.storyName = "Variant: H1";

export const VariantH2 = Template.bind({});
VariantH2.args = {
  children: "h2. Typography",
  type: "h2",
};
VariantH2.storyName = "Variant: H2";

export const VariantH3 = Template.bind({});
VariantH3.args = {
  children: "h3. Typography",
  type: "h3",
};
VariantH3.storyName = "Variant: H3";

export const WeightLight = Template.bind({});
WeightLight.args = {
  children: "Typography Light Weight",
  weight: "light",
};
WeightLight.storyName = "Weight: Light";

export const WeightNormal = Template.bind({});
WeightNormal.args = {
  children: "Typography Normal Weight",
  weight: "normal",
};
WeightNormal.storyName = "Weight: Normal";

export const WeightBold = Template.bind({});
WeightBold.args = {
  children: "Typography Bold Weight",
  weight: "bold",
};
WeightBold.storyName = "Weight: Bold";
