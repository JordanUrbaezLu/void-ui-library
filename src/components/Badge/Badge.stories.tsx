import { FaReact } from "react-icons/fa";
import { Badge } from "./Badge";
import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";

export default {
  component: Badge,
  title: "Components/Badge",
};

export const Size = () => {
  return (
    <FlexRowContainer>
      <Badge content={<FaReact />} size="small" title="ReactJS" />
      <Badge content={<FaReact />} size="medium" title="ReactJS" />
      <Badge content={<FaReact />} size="large" title="ReactJS" />
    </FlexRowContainer>
  );
};