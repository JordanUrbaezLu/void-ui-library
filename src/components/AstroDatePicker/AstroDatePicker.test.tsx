import { render } from "@testing-library/react";
import AstroDatePicker from "./AstroDatePicker";
import { axe } from "jest-axe";

describe("AstroDatePicker", () => {
  const { container } = render(<AstroDatePicker />);
  expect(container.firstChild).toMatchSnapshot();
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroDatePicker />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
