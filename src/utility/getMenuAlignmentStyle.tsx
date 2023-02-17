import { BaseMenuAlignment } from "../components/Menu/BaseMenu";
import { getLayoutStyle } from "./getLayoutStyle";

export const getMenuAlignmentStyle = ({
  alignment,
  referrerRef,
  targetRef,
}: {
  alignment: BaseMenuAlignment;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) =>
  getLayoutStyle({
    calculateLayout({
      referrerHeight,
      referrerWidth,
      targetHeight,
      targetWidth,
    }) {
      const left =
        alignment === "topLeft" || alignment === "bottomLeft"
          ? 0
          : alignment === "topCenter" || alignment === "bottomCenter"
          ? (targetWidth - referrerWidth) / 2
          : targetWidth - referrerWidth;

      const top = alignment.startsWith("bottom")
        ? targetHeight + 2
        : -referrerHeight - 2;

      return { left, top };
    },
    referrerRef,
    targetRef,
  });

// {
//   const menuWidth =
//     referrerRef.current?.getBoundingClientRect().width ?? 0;

//   const triggerWidth =
//     targetRef.current?.getBoundingClientRect().width ?? 0;

//   const left =
//     alignment === "topLeft" || alignment === "bottomLeft"
//       ? 0
//       : alignment === "topCenter" || alignment === "bottomCenter"
//       ? (triggerWidth - menuWidth) / 2
//       : triggerWidth - menuWidth;

//   const menuHeight =
//     referrerRef.current?.getBoundingClientRect().height ?? 0;

//   const triggerHeight =
//     targetRef.current?.getBoundingClientRect().height ?? 0;

//   const top = alignment.startsWith("bottom")
//     ? triggerHeight + 2
//     : -menuHeight - 2;

//   return { transform: `translate3d(${left}px, ${top}px, 0)` };
// };
