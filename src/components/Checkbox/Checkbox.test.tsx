import { render, screen } from "@testing-library/react";
import { Checkbox, CheckboxVariant } from "./Checkbox";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Checkbox isChecked onClick={jest.fn()} label="Checkbox Label" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Checkbox isChecked onClick={jest.fn()} label="Checkbox Label" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Checkbox Label";

    render(<Checkbox isChecked onClick={jest.fn()} label={label} />);
    expect(screen.getByRole("checkbox")).toHaveTextContent(label);
  });

  test.each<CheckboxVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <Checkbox
          isChecked
          onClick={jest.fn()}
          label="Checkbox Label"
          variant={variant}
        />
      );
      expect(document.getElementsByClassName("checkboxBorder")[0]).toHaveClass(
        variant
      );
    }
  );
});
