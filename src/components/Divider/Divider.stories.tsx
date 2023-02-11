import { Divider } from "./Divider";

export default {
  component: Divider,
  title: "Components/Divider",
};

export const Horizontal = () => <Divider direction="horizontal" />;

export const HorizontalThick = () => (
  <Divider direction="horizontal" stroke={2} />
);

export const Vertical = () => (
  <div style={{ height: "500px" }}>
    <Divider direction="vertical" />
  </div>
);

export const VerticalThick = () => (
  <div style={{ height: "500px" }}>
    <Divider direction="vertical" stroke={2} />
  </div>
);
