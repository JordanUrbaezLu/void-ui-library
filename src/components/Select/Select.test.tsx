import { render, screen } from "@testing-library/react";
import { Select, SelectVariant, SelectSize } from "./Select";
import { SelectItem } from "./SelectItem";
import { axe } from "jest-axe";

describe("Select", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Select>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Select>
        <SelectItem>30</SelectItem>
      </Select>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<SelectVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(
        <Select label="select" variant={variant}>
          <SelectItem>30</SelectItem>
        </Select>
      );
      expect(screen.getByText("select")).toHaveClass(`${variant}Label`);
    }
  );

  test.each<SelectSize>(["large", "medium", "small"])(
    "Should render size correctly.",
    (size) => {
      render(
        <Select label="select" size={size}>
          <SelectItem>30</SelectItem>
        </Select>
      );
      expect(screen.getByText("select")).toHaveClass(`${size}Label`);
    }
  );

  test("Should render label correctly.", () => {
    render(
      <Select label="Select">
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByText("Select")).toBeInTheDocument();
  });
});
