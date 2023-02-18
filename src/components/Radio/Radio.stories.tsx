import * as React from "react";
import { Radio } from "./Radio";

export default {
  component: Radio,
  title: "Components/Radio",
};

export const Default = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  return (
    <Radio
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    />
  );
};

export const Checked = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(true);

  return (
    <Radio
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    />
  );
};

export const Label = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  return (
    <Radio
      isSelected={isSelected}
      label="Radio"
      onChange={() => setIsSelected(!isSelected)}
    />
  );
};
