import { render, screen } from "@testing-library/react";
import AstroCalendar from "./AstroCalendar";
import { axe } from "jest-axe";

describe("AstroCalendar", () => {
  const { container } = render(
    <AstroCalendar customDate={new Date(2019, 5, 9)} />
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroCalendar customDate={new Date(2019, 5, 9)} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render custom date correctly.", () => {
    render(<AstroCalendar customDate={new Date(2019, 5, 9)} />);
    expect(screen.getByText("June 2019")).toBeInTheDocument();
  });
});
