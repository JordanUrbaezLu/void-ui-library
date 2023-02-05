import * as React from "react";
import { getMenuAlignmentCalculations } from "../../utility";

describe("getMenuAlignmentCalculations", () => {
  test("Should render calculations for bottomLeft correctly.", () => {
    const calculations = getMenuAlignmentCalculations({
      menuRef: React.createRef<HTMLElement>(),
      triggerRef: React.createRef<HTMLElement>(),
      alignment: "bottomLeft",
    });

    expect(calculations).toEqual({
      transform: "translate3d(0px, 2px, 0)",
    });
  });

  test("Should render calculations for bottomCenter correctly.", () => {
    const calculations = getMenuAlignmentCalculations({
      menuRef: React.createRef<HTMLElement>(),
      triggerRef: React.createRef<HTMLElement>(),
      alignment: "bottomCenter",
    });

    expect(calculations).toEqual({
      transform: "translate3d(0px, 2px, 0)",
    });
  });

  test("Should render calculations for bottomRight correctly.", () => {
    const calculations = getMenuAlignmentCalculations({
      menuRef: React.createRef<HTMLElement>(),
      triggerRef: React.createRef<HTMLElement>(),
      alignment: "bottomRight",
    });

    expect(calculations).toEqual({
      transform: "translate3d(0px, 2px, 0)",
    });
  });
});
