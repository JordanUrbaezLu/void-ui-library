import { render, screen } from "@testing-library/react";
import AstroSelect, {
  AstroSelectVariant,
  AstroSelectSize,
} from "./AstroSelect";
import AstroSelectItem from "./AstroSelectItem";
import { axe } from "jest-axe";

describe("AstroSelect", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroSelect>
        <AstroSelectItem>30</AstroSelectItem>
      </AstroSelect>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroSelect>
        <AstroSelectItem>30</AstroSelectItem>
      </AstroSelect>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<AstroSelectVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(
        <AstroSelect label="select" variant={variant}>
          <AstroSelectItem>30</AstroSelectItem>
        </AstroSelect>
      );
      expect(screen.getByText("select")).toHaveClass(`${variant}Label`);
    }
  );

  test.each<AstroSelectSize>(["large", "medium", "small"])(
    "Should render size correctly.",
    (size) => {
      render(
        <AstroSelect label="select" size={size}>
          <AstroSelectItem>30</AstroSelectItem>
        </AstroSelect>
      );
      expect(screen.getByText("select")).toHaveClass(`${size}Label`);
    }
  );

  test("Should render label correctly.", () => {
    render(
      <AstroSelect label="astroSelect">
        <AstroSelectItem>30</AstroSelectItem>
      </AstroSelect>
    );
    expect(screen.getByText("astroSelect")).toBeInTheDocument();
  });
});
