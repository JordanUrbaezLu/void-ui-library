import { Story } from "@storybook/react";
import * as React from "react";
import { AiFillEye, AiOutlineArrowRight } from "react-icons/ai";
import AstroTextField, {
  AstroTextFieldProps,
  AstroTextFieldType,
} from "./AstroTextField";

export default {
  component: AstroTextField,
  title: "Components/AstroTextField",
};

const Template: Story<Omit<AstroTextFieldProps, "value" | "onChange">> = (
  args
) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <AstroTextField
      {...args}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      value={value}
    />
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

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Label = Template.bind({});
Label.args = {
  label: "AstroTextField",
};

export const DisabledAndLabel = Template.bind({});
DisabledAndLabel.args = {
  disabled: true,
  label: "Disabled",
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: <AiOutlineArrowRight />,
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  type: "password",
};

export const TrailingIconAndPasswordType = () => {
  const [value, setValue] = React.useState<string>("");
  const [type, setType] = React.useState<AstroTextFieldType>("password");

  return (
    <AstroTextField
      onChange={(event) => {
        setValue(event.target.value);
      }}
      trailingIcon={
        <AiFillEye
          onClick={() => {
            if (type === "password") {
              setType("text");
            } else {
              setType("password");
            }
          }}
        />
      }
      type={type}
      value={value}
    />
  );
};

export const AllProps = Template.bind({});
AllProps.args = {
  variant: "secondary",
  size: "small",
  type: "password",
  trailingIcon: <AiFillEye />,
  label: "AstroTextField",
};
