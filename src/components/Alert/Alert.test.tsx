import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Alert, AlertVariant } from "./Alert";

describe("Alert", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Alert>This is an alert!</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Alert>This is an alert!</Alert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(<Alert>Alert</Alert>);
    expect(screen.getByText("Alert")).toBeInTheDocument();
  });
  test("Should render close button correctly.", () => {
    render(<Alert closeable>Alert</Alert>);
    expect(
      document.getElementsByClassName("alertCloseButton")[0]
    ).toBeInTheDocument();
  });
  test.each<AlertVariant>(["error", "info", "success", "warning"])(
    "Should render variants correctly.",
    (variant) => {
      render(<Alert variant={variant}>Alert</Alert>);
      expect(document.getElementsByClassName("alertContainer")[0]).toHaveClass(
        variant
      );
    }
  );
});
