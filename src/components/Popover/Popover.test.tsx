import { render, screen } from "@testing-library/react";
import { Popover, PopoverPosition } from "./Popover";
import { axe } from "jest-axe";

describe("Popover", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Popover startsOpen text="Popover" trigger={<button>Button</button>} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Popover startsOpen text="Popover" trigger={<button>Button</button>} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render text correctly.", () => {
    render(
      <Popover startsOpen text="Popover" trigger={<button>Button</button>} />
    );
    expect(screen.getByText("Popover")).toBeInTheDocument();
  });
  test.each<PopoverPosition>(["top", "bottom"])(
    "Should render positions correctly.",
    (position) => {
      render(
        <Popover
          startsOpen
          position={position}
          text="Popover"
          trigger={<button>Button</button>}
        />
      );
      expect(screen.getByText("Popover")).toHaveClass(position);
    }
  );
  test("Should render trigger correctly.", () => {
    render(
      <Popover startsOpen text="Popover" trigger={<button>Button</button>} />
    );
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
  });
  test("Should render hasNubbin correctly.", () => {
    render(
      <Popover
        hasNubbin
        startsOpen
        text="Popover"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Popover")).toHaveClass("nubbin");
  });
  test("Should render startsOpen correctly.", () => {
    render(
      <div data-testid="div">
        <Popover
          startsOpen={false}
          text="Popover"
          trigger={<button>Button</button>}
        />
      </div>
    );
    expect(screen.getByTestId("div")).not.toHaveTextContent("Popover");
  });
});
