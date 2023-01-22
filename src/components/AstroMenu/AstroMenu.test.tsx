import { fireEvent, render, screen } from "@testing-library/react";
import AstroMenu from "./AstroMenu";
import AstroMenuItem from "./AstroMenuItem";
import { axe } from "jest-axe";
import AstroButton from "../AstroButton/AstroButton";

describe("AstroMenu", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroMenu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<AstroButton>Trigger</AstroButton>}
      >
        <AstroMenuItem>One</AstroMenuItem>
      </AstroMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroMenu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<AstroButton>Trigger</AstroButton>}
      >
        <AstroMenuItem>One</AstroMenuItem>
      </AstroMenu>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <AstroMenu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<AstroButton>Trigger</AstroButton>}
      >
        <AstroMenuItem>One</AstroMenuItem>
      </AstroMenu>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("menuitem")).toHaveTextContent("One");
  });

  test("Should render trigger correctly.", () => {
    render(
      <AstroMenu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<AstroButton>Trigger</AstroButton>}
      >
        <AstroMenuItem>One</AstroMenuItem>
      </AstroMenu>
    );
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("Trigger");
  });
});
