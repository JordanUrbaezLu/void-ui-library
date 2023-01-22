import { render, screen } from "@testing-library/react";
import { AstroSwitch, AstroSwitchVariant } from "./AstroSwitch";
import { axe } from "jest-axe";

describe("AstroSwitch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroSwitch isOn onClick={jest.fn()} label="Astro Switch Label" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroSwitch isOn onClick={jest.fn()} label="Astro Switch Label" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Astro Switch Label";

    render(<AstroSwitch isOn onClick={jest.fn()} label={label} />);
    expect(screen.getByRole("switch")).toHaveTextContent(label);
  });

  test.each<AstroSwitchVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <AstroSwitch
          isOn
          onClick={jest.fn()}
          label="Astro Switch Label"
          variant={variant}
        />
      );
      expect(screen.getByRole("switch")).toHaveClass(variant);
    }
  );
});
