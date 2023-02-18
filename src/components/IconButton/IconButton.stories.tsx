import { IconButton } from "./IconButton";
import { FaReact } from "react-icons/fa";
import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";

export default {
  component: IconButton,
  title: "Components/IconButton",
};

export const Default = () => <IconButton content={<FaReact />} />;

export const Size = () => {
  return (
    <FlexRowContainer>
      <IconButton content={<FaReact />} size="small" />
      <IconButton content={<FaReact />} size="medium" />
      <IconButton content={<FaReact />} size="large" />
    </FlexRowContainer>
  );
};
