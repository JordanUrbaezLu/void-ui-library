import { render, screen } from "@testing-library/react";
import AstroSelect, {
  AstroSelectVariant,
  AstroSelectSize,
} from "./AstroSelect";
import { axe } from "jest-axe";

describe("AstroSelect", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroSelect />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroSelect />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<AstroSelectVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(<AstroSelect label="select" variant={variant} />);
      expect(screen.getByText("select")).toHaveClass(`${variant}Label`);
    }
  );

  test.each<AstroSelectSize>(["large", "medium", "small"])(
    "Should render size correctly.",
    (size) => {
      render(<AstroSelect label="select" size={size} />);
      expect(screen.getByText("select")).toHaveClass(`${size}Label`);
    }
  );

  test("Should render label correctly.", () => {
    render(<AstroSelect label="astroSelect" />);
    expect(screen.getByText("astroSelect")).toBeInTheDocument();
  });
});
