import * as React from "react";

export const useDebouncedWindowResize = (
  onResize: (...args: unknown[]) => void
) =>
  React.useEffect(() => {
    const listener = debounce(onResize, 250);

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
      listener.cancel();
    };
  }, [onResize]);

const debounce = <T extends unknown[], R = { (): void; cancel: () => void }>(
  fn: (...args: T) => R,
  timeout: number
) => {
  let timerID: ReturnType<typeof setTimeout>;

  const cancel = () => {
    clearTimeout(timerID);
  };

  const debounced = (...args: T) => {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      fn(...args);
    }, timeout);
  };

  debounced.cancel = cancel;

  return debounced;
};
