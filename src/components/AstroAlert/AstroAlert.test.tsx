import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import AstroAlert, { AstroAlertVariant } from "./AstroAlert";

describe("AstroAlert", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroAlert>This is an alert!</AstroAlert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroAlert>This is an alert!</AstroAlert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(<AstroAlert>AstroAlert</AstroAlert>);
    expect(screen.getByText("AstroAlert")).toBeInTheDocument();
  });
  test("Should render close button correctly.", () => {
    render(<AstroAlert closeable>AstroAlert</AstroAlert>);
    expect(
      document.getElementsByClassName("astroAlertCloseButton")[0]
    ).toBeInTheDocument();
  });
  test.each<AstroAlertVariant>(["error", "info", "success", "warning"])(
    "Should render variants correctly.",
    (variant) => {
      render(<AstroAlert variant={variant}>AstroAlert</AstroAlert>);
      expect(
        document.getElementsByClassName("astroAlertContainer")[0]
      ).toHaveClass(variant);
    }
  );
});
