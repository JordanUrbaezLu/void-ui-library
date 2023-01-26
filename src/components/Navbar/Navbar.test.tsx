import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Navbar, NavbarVariant } from "./Navbar";
import { NavbarItem } from "./NavbarItem";

describe("Calendar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Navbar>
        <NavbarItem link="https://github.com/JordanUrbaezLu/-ui-library">
          Github
        </NavbarItem>
      </Navbar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Navbar>
        <NavbarItem link="https://github.com/JordanUrbaezLu/-ui-library">
          Github
        </NavbarItem>
      </Navbar>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <Navbar>
        <NavbarItem link="https://github.com/JordanUrbaezLu/-ui-library">
          Github
        </NavbarItem>
      </Navbar>
    );
    expect(screen.getByText("Github")).toBeInTheDocument();
  });
  test("Should render logo props correctly.", () => {
    render(
      <Navbar
        logoProps={{
          link: "https://github.com/JordanUrbaezLu/-ui-library",
          url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
        }}
      >
        <NavbarItem link="https://github.com/JordanUrbaezLu/-ui-library">
          Github
        </NavbarItem>
      </Navbar>
    );
    expect(
      document.getElementsByClassName("NavbarLogoContainer")[0]
    ).toBeInTheDocument();
  });
  test.each<NavbarVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(
        <Navbar variant={variant}>
          <NavbarItem link="https://github.com/JordanUrbaezLu/-ui-library">
            Github
          </NavbarItem>
        </Navbar>
      );
      expect(screen.getByRole("navigation")).toHaveClass(variant);
    }
  );
});
