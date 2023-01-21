import { AstroMenuAlignment } from "src/components/AstroMenu";

export const getMenuAlignmentCalculations = ({
  menuRef,
  triggerRef,
  alignment,
}: {
  menuRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  alignment: AstroMenuAlignment;
}) => {
  const triggerWidth = triggerRef.current?.getBoundingClientRect().width;

  const triggerHeight = triggerRef.current?.getBoundingClientRect().height;

  const menuWidth = menuRef.current?.getBoundingClientRect().width;

  const menuHeight = menuRef.current?.getBoundingClientRect().height;

  const left =
    menuWidth === undefined ||
    triggerWidth === undefined ||
    alignment === "topLeft" ||
    alignment === "bottomLeft"
      ? 0
      : alignment === "topCenter" || alignment === "bottomCenter"
      ? (triggerWidth - menuWidth) / 2
      : triggerWidth - menuWidth;

  const height =
    menuHeight === undefined ||
    triggerHeight === undefined ||
    alignment.startsWith("bottom")
      ? triggerHeight
      : -menuHeight;

  return { transform: `translate3d(${left}px, ${height}px, 0)` };
};
