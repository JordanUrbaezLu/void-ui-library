import { BaseCalloutPosition } from "./BaseCallout";
import { getPositionStyle } from "../../utility/getPositionStyle";

export const getCalloutPositionStyle = ({
  position,
  referrerRef,
  targetRef,
}: {
  position: BaseCalloutPosition;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) =>
  getPositionStyle({
    calculatePosition({
      referrerHeight,
      referrerWidth,
      targetHeight,
      targetWidth,
    }) {
      let left: number;
      let top: number;

      if (position === "left") {
        left = -1 * referrerWidth;
      } else if (position === "right") {
        left = targetWidth;
      } else {
        left = (targetWidth - referrerWidth) / 2;
      }

      if (position === "bottom") {
        top = targetHeight;
      } else if (position === "top") {
        top = -1 * referrerHeight;
      } else {
        top = (targetWidth - referrerHeight) / 2;
      }
      return { left, top };
    },
    referrerRef,
    targetRef,
  });
