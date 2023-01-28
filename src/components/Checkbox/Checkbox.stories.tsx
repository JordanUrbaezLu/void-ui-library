import * as React from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
};

export const Default = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Checkbox"
    />
  );
};
