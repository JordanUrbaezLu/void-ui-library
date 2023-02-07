import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Overlay } from "../../components/Overlay";

describe("Overlay", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Overlay />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Overlay />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render with no background correctly.", () => {
    render(<Overlay data-testid="overlay" showBackground={false} />);
    expect(screen.getByTestId("overlay")).toHaveClass("noBackground");
  });
});
