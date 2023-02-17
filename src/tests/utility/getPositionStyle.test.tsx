import * as React from "react";
import { getPositionStyle } from "../../utility";

describe("getPositionStyle", () => {
  test("Should return a null transform style on inadequate refs.", () => {
    const style = getPositionStyle({
      calculatePosition({
        referrerHeight,
        referrerWidth,
        targetHeight,
        targetWidth,
      }) {
        const left = referrerHeight - targetHeight;
        const top = referrerWidth - targetWidth;
        return { left, top };
      },
      referrerRef: React.createRef<HTMLElement>(),
      targetRef: React.createRef<HTMLElement>(),
    });

    expect(style).toEqual({ transform: "translate3d(0px, 0px, 0)" });
  });
});
