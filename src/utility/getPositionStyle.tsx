import * as React from "react";

export type CalculatePositionFn = (dimensions: {
  referrerHeight: number;
  referrerWidth: number;
  targetHeight: number;
  targetWidth: number;
}) => { left: number; top: number };

export const getPositionStyle = ({
  calculatePosition,
  referrerRef,
  targetRef,
}: {
  calculatePosition: CalculatePositionFn;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) => {
  const referrerDOMRect =
    referrerRef.current?.getBoundingClientRect() || {
      height: 0,
      width: 0,
    };
  const targetDOMRect =
    targetRef.current?.getBoundingClientRect() || {
      height: 0,
      width: 0,
    };

  console.log(referrerDOMRect.height);

  console.log(referrerDOMRect.width);

  console.log(targetDOMRect.height);

  console.log(targetDOMRect.width);

  const { left, top } = calculatePosition({
    referrerHeight: referrerDOMRect.height,
    referrerWidth: referrerDOMRect.width,
    targetHeight: targetDOMRect.height,
    targetWidth: targetDOMRect.width,
  });

  return { transform: `translate3d(${left}px, ${top}px, 0)` };
};
