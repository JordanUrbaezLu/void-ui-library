import { IconButton } from "./IconButton";
import { FaReact } from "react-icons/fa";

export default {
  component: IconButton,
  title: "Components/IconButton",
};

export const Default = () => (
  <IconButton content={<FaReact />} onClick={() => {}} />
);

export const Small = () => (
  <IconButton content={<FaReact />} onClick={() => {}} size="small" />
);

export const Medium = () => (
  <IconButton content={<FaReact />} onClick={() => {}} size="medium" />
);

export const Large = () => (
  <IconButton content={<FaReact />} onClick={() => {}} size="large" />
);
