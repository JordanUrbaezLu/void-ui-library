import { FlexColumnContainer } from "../../../.storybook/components/FlexColumnContainer";
import { Divider } from "./Divider";

export default {
  component: Divider,
  title: "Components/Divider",
};

export const Stroke = () => {
  return (
    <FlexColumnContainer>
      <Divider direction="horizontal" />
      <Divider direction="horizontal" stroke={2} />
      <Divider direction="horizontal" stroke={5} />
    </FlexColumnContainer>
  );
};

export const Horizontal = () => <Divider direction="horizontal" />;

export const Vertical = () => (
  <div style={{ height: "500px" }}>
    <Divider direction="vertical" />
  </div>
);
