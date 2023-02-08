import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import {
  Tooltip,
  TooltipPosition,
} from "../../components/Tooltip/Tooltip";
import { axe } from "jest-axe";
import React from "react";

describe("Tooltip", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Tooltip
        startsOpen
        text="Tooltip"
        trigger={<button>Button</button>}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Tooltip
        startsOpen
        text="Tooltip"
        trigger={<button>Button</button>}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should show tooltip correctly on hover.", async () => {
    render(
      <Tooltip text="Tooltip" trigger={<button>Button</button>} />
    );

    fireEvent.mouseEnter(screen.getByRole("button"));

    await waitFor(() => screen.getByRole("tooltip"));

    expect(screen.getByText("Tooltip")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole("button"));
  });

  test("Should show tooltip correctly on focus.", () => {
    render(
      <React.Fragment>
        <Tooltip text="Tooltip" trigger={<button>Button</button>} />
        <button>Outside</button>
      </React.Fragment>
    );

    const buttonElement = screen.getAllByRole("button")[0];

    act(() => buttonElement.focus());

    expect(buttonElement).toHaveFocus();

    expect(screen.getByText("Tooltip")).toBeInTheDocument();

    const outsideElement = screen.getAllByRole("button")[1];

    act(() => outsideElement.focus());

    expect(outsideElement).toHaveFocus();
  });
});

describe("Props", () => {
  test("Should render text correctly.", () => {
    render(
      <Tooltip
        startsOpen
        text="Tooltip"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });
  test.each<TooltipPosition>(["top", "bottom"])(
    "Should render positions correctly.",
    (position) => {
      render(
        <Tooltip
          startsOpen
          position={position}
          text="Tooltip"
          trigger={<button>Button</button>}
        />
      );
      expect(screen.getByText("Tooltip")).toHaveClass(position);
    }
  );
  test("Should render trigger correctly.", () => {
    render(
      <Tooltip
        startsOpen
        text="Tooltip"
        trigger={<button>Button</button>}
      />
    );
    expect(
      screen.getByRole("button", { name: "Button" })
    ).toBeInTheDocument();
  });
  test("Should render hasNubbin correctly.", () => {
    render(
      <Tooltip
        hasNubbin
        startsOpen
        text="Tooltip"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Tooltip")).toHaveClass("nubbin");
  });
  test("Should render startsOpen correctly.", () => {
    render(
      <div data-testid="div">
        <Tooltip
          startsOpen={false}
          text="Tooltip"
          trigger={<button>Button</button>}
        />
      </div>
    );
    expect(screen.getByTestId("div")).not.toHaveTextContent(
      "Tooltip"
    );
  });
});
