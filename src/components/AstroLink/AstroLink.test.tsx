import { render, screen } from "@testing-library/react";
import AstroLink, { AstroLinkVariant } from "./AstroLink";
import { axe } from "jest-axe";

describe("AstroLink", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroLink href="https://www.google.com/">Google.com</AstroLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroLink href="https://www.google.com/">Google.com</AstroLink>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<AstroLinkVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(
        <AstroLink href="https://www.google.com/" variant={variant}>
          Google.com
        </AstroLink>
      );
      expect(screen.getAllByRole("link")[0]).toHaveClass(variant);
    }
  );
});
