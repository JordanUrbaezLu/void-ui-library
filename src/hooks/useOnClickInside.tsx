import * as React from "react";

export const useOnClickInside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void
) => {
  return React.useEffect(() => {
    const checkIfInside = (event: any) => {
      const isInside = ref.current?.contains(event.target as Node);
      if (isInside) {
        handler();
      }
    };
    document.addEventListener("mousedown", checkIfInside);

    return () => {
      document.removeEventListener("mousedown", checkIfInside);
    };
  });
};