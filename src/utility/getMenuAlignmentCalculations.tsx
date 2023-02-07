import { MenuAlignment } from "src/components/Menu";

export const getMenuAlignmentCalculations = ({
  menuRef,
  triggerRef,
  alignment,
}: {
  menuRef: React.RefObject<HTMLElement>;
  triggerRef: React.RefObject<HTMLElement>;
  alignment: MenuAlignment;
}) => {
  const menuWidth =
    menuRef.current?.getBoundingClientRect().width ?? 0;

  const triggerWidth =
    triggerRef.current?.getBoundingClientRect().width ?? 0;

  const left =
    alignment === "topLeft" || alignment === "bottomLeft"
      ? 0
      : alignment === "topCenter" || alignment === "bottomCenter"
      ? (triggerWidth - menuWidth) / 2
      : triggerWidth - menuWidth;

  const menuHeight =
    menuRef.current?.getBoundingClientRect().height ?? 0;

  const triggerHeight =
    triggerRef.current?.getBoundingClientRect().height ?? 0;

  const top = alignment.startsWith("bottom")
    ? triggerHeight + 2
    : -menuHeight - 2;

  return { transform: `translate3d(${left}px, ${top}px, 0)` };
};
