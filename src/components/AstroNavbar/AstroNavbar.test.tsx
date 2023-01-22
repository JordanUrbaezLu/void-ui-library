import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { AstroNavbar, AstroNavbarVariant } from "./AstroNavbar";
import { AstroNavbarItem } from "./AstroNavbarItem";

describe("AstroCalendar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroNavbar>
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
      </AstroNavbar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroNavbar>
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
      </AstroNavbar>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <AstroNavbar>
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
      </AstroNavbar>
    );
    expect(screen.getByText("Github")).toBeInTheDocument();
  });
  test("Should render logo props correctly.", () => {
    render(
      <AstroNavbar
        logoProps={{
          link: "https://github.com/JordanUrbaezLu/astro-ui-library",
          url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
        }}
      >
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
      </AstroNavbar>
    );
    expect(
      document.getElementsByClassName("astroNavbarLogoContainer")[0]
    ).toBeInTheDocument();
  });
  test.each<AstroNavbarVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <AstroNavbar variant={variant}>
          <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
            Github
          </AstroNavbarItem>
        </AstroNavbar>
      );
      expect(screen.getByRole("navigation")).toHaveClass(variant);
    }
  );
});
