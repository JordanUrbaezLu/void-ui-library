import * as React from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
};

export const Default = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const Checked = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const Label = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <Checkbox
      isChecked={isChecked}
      label="Checkbox"
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};
