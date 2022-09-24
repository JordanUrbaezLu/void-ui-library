import { render, screen } from "@testing-library/react";
import AstroPopover, { AstroPopoverPosition } from "./AstroPopover";
import { axe } from "jest-axe";

describe("AstroPopover", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AstroPopover text="Popover" trigger={<button>Button</button>} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <AstroPopover text="Popover" trigger={<button>Button</button>} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render text correctly.", () => {
    render(
      <AstroPopover
        isOpen={true}
        text="Popover"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Popover")).toBeInTheDocument();
  });
  test.each<AstroPopoverPosition>(["top", "bottom"])(
    "Should render positions correctly.",
    (position) => {
      render(
        <AstroPopover
          isOpen={true}
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
      <AstroPopover
        isOpen={true}
        text="Popover"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
  });
  test("Should render hasNubbin correctly.", () => {
    render(
      <AstroPopover
        hasNubbin
        isOpen={true}
        text="Popover"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Popover")).toHaveClass("nubbin");
  });
  test("Should render isOpen correctly.", () => {
    render(
      <div data-testid="div">
        <AstroPopover
          isOpen={false}
          text="Popover"
          trigger={<button>Button</button>}
        />
      </div>
    );
    expect(screen.getByTestId("div")).not.toHaveTextContent("Popover");
  });
});
