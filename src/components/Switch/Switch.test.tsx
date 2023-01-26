import { render, screen } from "@testing-library/react";
import { Switch, SwitchVariant } from "./Switch";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Switch isOn onClick={jest.fn()} label=" Switch Label" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Switch isOn onClick={jest.fn()} label="Switch Label" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Switch Label";

    render(<Switch isOn onClick={jest.fn()} label={label} />);
    expect(screen.getByRole("switch")).toHaveTextContent(label);
  });

  test.each<SwitchVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <Switch
          isOn
          onClick={jest.fn()}
          label="Switch Label"
          variant={variant}
        />
      );
      expect(screen.getByRole("switch")).toHaveClass(variant);
    }
  );
});
