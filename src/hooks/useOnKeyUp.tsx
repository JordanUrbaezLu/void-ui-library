import * as React from "react";

export const useOnKeyUp = (keys: string[], handler: () => void) => {
  return React.useEffect(() => {
    const checkKey = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        handler();
      }

      document.addEventListener("keyup", checkKey);

      return () => document.removeEventListener("keyup", checkKey);
    };
  }, [keys, handler]);
};
