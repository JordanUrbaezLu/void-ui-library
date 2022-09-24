import * as React from "react";

export const getRefHeight = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return ref.current?.getBoundingClientRect().height;
};
