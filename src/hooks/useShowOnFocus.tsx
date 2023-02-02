import * as React from "react";

export const useShowOnFocus = (
  ref: React.RefObject<HTMLDivElement>,
  showElement: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return React.useEffect(() => {
    ref.current?.addEventListener("focus", () => {
      showElement(true);
    });

    ref.current?.addEventListener("focusout", () => {
      showElement(false);
    });

    return () => {
      ref.current?.removeEventListener("focus", () => {
        showElement(true);
      });

      ref.current?.removeEventListener("focusout", () => {
        showElement(false);
      });
    };
  }, [ref]);
};
