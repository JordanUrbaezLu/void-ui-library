import { render, screen } from "@testing-library/react";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Checkbox
        isChecked
        onChange={jest.fn()}
        label="Checkbox Label"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Checkbox
        isChecked
        onChange={jest.fn()}
        label="Checkbox Label"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Checkbox Label";

    render(<Checkbox isChecked onChange={jest.fn()} label={label} />);
    expect(screen.getByRole("checkbox")).toHaveTextContent(label);
  });

  test("Should render unchecked correctly.", () => {
    const label = "Checkbox Label";

    render(<Checkbox onChange={jest.fn()} label={label} />);
    expect(screen.getByText(label)).not.toHaveClass("checked");
  });
});
