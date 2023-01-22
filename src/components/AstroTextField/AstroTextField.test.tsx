import { render, screen } from "@testing-library/react";
import {
  AstroTextField,
  AstroTextFieldSize,
  AstroTextFieldVariant,
  AstroTextFieldType,
} from "./AstroTextField";
import { axe } from "jest-axe";

describe("AstroTextField", () => {
  // Fixes some jest-axe issues
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  // Fixes some jest-axe issues
  test("Should render component correctly.", () => {
    const { container } = render(<AstroTextField onChange={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroTextField onChange={jest.fn()} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<AstroTextFieldVariant>(["primary", "secondary", "tertiary"])(
    "Should render variants correctly.",
    (variant) => {
      render(<AstroTextField onChange={jest.fn()} variant={variant} />);
      expect(screen.getByLabelText("textfield")).toHaveClass(variant);
    }
  );

  test.each<AstroTextFieldSize>(["small", "medium", "large"])(
    "Should render size correctly.",
    (size) => {
      render(<AstroTextField onChange={jest.fn()} size={size} />);
      expect(screen.getByLabelText("textfield")).toHaveClass(size);
    }
  );

  test("Should render disabled correctly.", () => {
    render(<AstroTextField disabled onChange={jest.fn()} />);
    expect(screen.getByLabelText("textfield")).toHaveClass("disabled");
  });

  test("Should render label correctly.", () => {
    render(<AstroTextField label="astro" onChange={jest.fn()} />);
    expect(screen.getByLabelText("astro")).toBeInTheDocument();
  });

  test.each<AstroTextFieldType>([
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
  ])("Should render type correctly.", (type) => {
    render(<AstroTextField onChange={jest.fn()} type={type} />);
    expect(screen.getByLabelText("textfield")).toHaveAttribute("type", type);
  });

  test("Should render trailing icon correctly.", () => {
    render(<AstroTextField onChange={jest.fn()} trailingIcon="trailing" />);
    expect(screen.getByText("trailing")).toBeInTheDocument();
  });
});
