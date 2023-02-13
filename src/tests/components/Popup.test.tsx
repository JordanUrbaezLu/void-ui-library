import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Popup, PopupPosition } from "../../components/Popup/Popup";
import { axe } from "jest-axe";
import React from "react";

describe("Popup", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Popup
        startsOpen
        text="Popup"
        trigger={<button>Button</button>}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Popup
        startsOpen
        text="Popup"
        trigger={<button>Button</button>}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should show popup correctly on hover.", async () => {
    render(<Popup text="Popup" trigger={<button>Button</button>} />);

    fireEvent.mouseEnter(screen.getByRole("button"));

    await waitFor(() => screen.getByRole("tooltip"));

    expect(screen.getByText("Popup")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole("button"));
  });

  test("Should show popup correctly on focus.", () => {
    render(
      <React.Fragment>
        <Popup text="Popup" trigger={<button>Button</button>} />
        <button>Outside</button>
      </React.Fragment>
    );

    const buttonElement = screen.getAllByRole("button")[0];

    act(() => buttonElement.focus());

    expect(buttonElement).toHaveFocus();

    expect(screen.getByText("Popup")).toBeInTheDocument();

    const outsideElement = screen.getAllByRole("button")[1];

    act(() => outsideElement.focus());

    expect(outsideElement).toHaveFocus();
  });
});

describe("Props", () => {
  test("Should render text correctly.", () => {
    render(
      <Popup
        startsOpen
        text="Popup"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Popup")).toBeInTheDocument();
  });
  test.each<PopupPosition>(["top", "bottom"])(
    "Should render positions correctly.",
    (position) => {
      render(
        <Popup
          startsOpen
          position={position}
          text="Popup"
          trigger={<button>Button</button>}
        />
      );
      expect(screen.getByText("Popup")).toHaveClass(position);
    }
  );
  test("Should render trigger correctly.", () => {
    render(
      <Popup
        startsOpen
        text="Popup"
        trigger={<button>Button</button>}
      />
    );
    expect(
      screen.getByRole("button", { name: "Button" })
    ).toBeInTheDocument();
  });
  test("Should render hasNubbin correctly.", () => {
    render(
      <Popup
        hasNubbin
        startsOpen
        text="Popup"
        trigger={<button>Button</button>}
      />
    );
    expect(screen.getByText("Popup")).toHaveClass("nubbin");
  });
  test("Should render startsOpen correctly.", () => {
    render(
      <div data-testid="div">
        <Popup
          startsOpen={false}
          text="Popup"
          trigger={<button>Button</button>}
        />
      </div>
    );
    expect(screen.getByTestId("div")).not.toHaveTextContent("Popup");
  });
});
