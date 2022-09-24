import * as React from "react";

export const getRefWidth = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return ref.current?.getBoundingClientRect().width;
};
