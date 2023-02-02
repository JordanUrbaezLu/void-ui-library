import { TooltipPosition } from "src/components/Tooltip";

export const getTooltipPositionCalculations = ({
  tooltipRef,
  triggerRef,
  position,
  hasNubbin,
}: {
  tooltipRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  position: TooltipPosition;
  hasNubbin: boolean;
}) => {
  const tooltipWidth = tooltipRef.current?.getBoundingClientRect().width ?? 0;

  const triggerWidth = triggerRef.current?.getBoundingClientRect().width ?? 0;

  const left = (triggerWidth - tooltipWidth) / 2;

  const tooltipHeight = tooltipRef.current?.getBoundingClientRect().height ?? 0;

  const triggerHeight = triggerRef.current?.getBoundingClientRect().height ?? 0;

  const nubbinHeight = hasNubbin ? 7 : 0;

  const height =
    position === "bottom"
      ? triggerHeight + 5 + nubbinHeight
      : -tooltipHeight - 5 - nubbinHeight;

  return { transform: `translate3d(${left}px, ${height}px, 0)` };
};
