import { PopoverPosition } from "src/components/Popover";

export const getPopoverPositionCalculations = ({
  popoverRef,
  triggerRef,
  position,
  hasNubbin,
}: {
  popoverRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  position: PopoverPosition;
  hasNubbin: boolean;
}) => {
  const popoverWidth = popoverRef.current?.getBoundingClientRect().width ?? 0;

  const triggerWidth = triggerRef.current?.getBoundingClientRect().width ?? 0;

  const left = (triggerWidth - popoverWidth) / 2;

  const popoverHeight = popoverRef.current?.getBoundingClientRect().height ?? 0;

  const triggerHeight = triggerRef.current?.getBoundingClientRect().height ?? 0;

  const nubbinHeight = hasNubbin ? 7 : 0;

  const height =
    position === "bottom"
      ? triggerHeight + 5 + nubbinHeight
      : -popoverHeight - 5 - nubbinHeight;

  return { transform: `translate3d(${left}px, ${height}px, 0)` };
};
