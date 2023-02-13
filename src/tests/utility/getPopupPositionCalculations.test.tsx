import * as React from "react";
import { getPopupPositionCalculations } from "../../utility";

describe("getPopupPositionCalculations", () => {
  test("Should render calculations for top correctly.", () => {
    const calculations = getPopupPositionCalculations({
      popupRef: React.createRef<HTMLElement>(),
      triggerRef: React.createRef<HTMLElement>(),
      position: "top",
      hasNubbin: false,
    });

    expect(calculations).toEqual({
      transform: "translate3d(0px, -5px, 0)",
    });
  });

  test("Should render calculations for bottom correctly.", () => {
    const calculations = getPopupPositionCalculations({
      popupRef: React.createRef<HTMLElement>(),
      triggerRef: React.createRef<HTMLElement>(),
      position: "bottom",
      hasNubbin: false,
    });

    expect(calculations).toEqual({
      transform: "translate3d(0px, 5px, 0)",
    });
  });
});
