import { render, screen } from "@testing-library/react";
import { Select } from "./Select";
import { SelectItem } from "./SelectItem";
import { axe } from "jest-axe";

describe("Select", () => {
  test("Should render component correctly.", () => {
    // Fixes some jest-axe issues
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    // Fixes some jest-axe issues
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
  test("Should render label correctly.", () => {
    render(
      <Select label="Select">
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByText("Select")).toBeInTheDocument();
  });
});
