import { render, screen } from "@testing-library/react";
import AstroSelectItem from "./AstroSelectItem";
import { axe } from "jest-axe";

describe("AstroSelect", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroSelectItem value="item" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroSelectItem value="item" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render value correctly.", () => {
    render(
      <div data-testid="select">
        <AstroSelectItem value="item" />
      </div>
    );
    expect(screen.getByTestId("select")).toHaveTextContent("item");
  });
});
