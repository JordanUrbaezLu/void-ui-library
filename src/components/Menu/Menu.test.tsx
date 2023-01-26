import { fireEvent, render, screen } from "@testing-library/react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { axe } from "jest-axe";
import { Button } from "../Button/Button";

describe("Menu", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("menuitem")).toHaveTextContent("One");
  });

  test("Should render trigger correctly.", () => {
    render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("Trigger");
  });
});
