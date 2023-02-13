import { PopupPosition } from "../components/Popup/Popup";

export const getPopupPositionCalculations = ({
  popupRef,
  triggerRef,
  position,
  hasNubbin,
}: {
  popupRef: React.RefObject<HTMLElement>;
  triggerRef: React.RefObject<HTMLElement>;
  position: PopupPosition;
  hasNubbin: boolean;
}) => {
  const PopupWidth =
    popupRef.current?.getBoundingClientRect().width ?? 0;

  const triggerWidth =
    triggerRef.current?.getBoundingClientRect().width ?? 0;

  const left = (triggerWidth - PopupWidth) / 2;

  const PopupHeight =
    popupRef.current?.getBoundingClientRect().height ?? 0;

  const triggerHeight =
    triggerRef.current?.getBoundingClientRect().height ?? 0;

  const nubbinHeight = hasNubbin ? 7 : 0;

  const height =
    position === "bottom"
      ? triggerHeight + 5 + nubbinHeight
      : -PopupHeight - 5 - nubbinHeight;

  return { transform: `translate3d(${left}px, ${height}px, 0)` };
};
