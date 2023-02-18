import { render, screen } from "@testing-library/react";
import { Radio } from "../../components/Radio/Radio";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Radio isSelected onChange={jest.fn()} label="Radio Label" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Radio isSelected onChange={jest.fn()} label="Radio Label" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Radio Label";

    render(<Radio isSelected onChange={jest.fn()} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("Should render unchecked correctly.", () => {
    const label = "Radio Label";

    render(<Radio onChange={jest.fn()} label={label} />);
    expect(screen.getByText(label)).not.toHaveClass("selected");
  });
});
