import { render, screen } from "@testing-library/react";
import { AstroCheckbox, AstroCheckboxVariant } from "./AstroCheckbox";
import { axe } from "jest-axe";

describe("AstroSwitch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroCheckbox
        isChecked
        onClick={jest.fn()}
        label="Astro Checkbox Label"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroCheckbox
        isChecked
        onClick={jest.fn()}
        label="Astro Checkbox Label"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Astro Checkbox Label";

    render(<AstroCheckbox isChecked onClick={jest.fn()} label={label} />);
    expect(screen.getByRole("checkbox")).toHaveTextContent(label);
  });

  test.each<AstroCheckboxVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <AstroCheckbox
          isChecked
          onClick={jest.fn()}
          label="Astro Checkbox Label"
          variant={variant}
        />
      );
      expect(
        document.getElementsByClassName("astroCheckboxBorder")[0]
      ).toHaveClass(variant);
    }
  );
});
