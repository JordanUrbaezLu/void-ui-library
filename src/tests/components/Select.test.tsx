import {
  fireEvent,
  render,
  screen,
  createEvent,
} from "@testing-library/react";
import { Select } from "../../components/Select/Select";
import { SelectItem } from "../../components/Select/SelectItem";
import { axe } from "jest-axe";
import { act } from "react-dom/test-utils";

describe("Select", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Select onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Select onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should open SelectContainer on icon click.", () => {
    render(
      <Select
        isOpen
        onClose={jest.fn()}
        onOpen={jest.fn()}
        placeholder="Number"
      >
        <SelectItem>30</SelectItem>
      </Select>
    );

    act(() => screen.getByRole("button").click());

    expect(screen.getByText("30")).toBeInTheDocument();

    act(() => screen.getByRole("listitem").click());
  });

  test("Should open SelectContainer on placeholder click.", () => {
    render(
      <Select
        onClose={jest.fn()}
        onOpen={jest.fn()}
        placeholder="Placeholder"
      >
        <SelectItem>30</SelectItem>
      </Select>
    );

    act(() => screen.getByText("Placeholder").click());
  });

  test("Should close SelectConatiner on label click.", () => {
    render(
      <Select
        isOpen
        onClose={jest.fn()}
        onOpen={jest.fn()}
        selected={0}
      >
        <SelectItem>30</SelectItem>
      </Select>
    );

    screen.getAllByText("30")[0].click();
  });

  test("Should close Select on click outside.", () => {
    render(
      <Select onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );

    fireEvent.mouseDown(document.body);
  });

  test("Should trigger onClose on Escape key down.", () => {
    const onClose = jest.fn();

    render(
      <Select isOpen onOpen={jest.fn} onClose={onClose}>
        <SelectItem>30</SelectItem>
      </Select>
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Should trigger key down events correctly.", () => {
    const onClose = jest.fn();

    render(
      <Select isOpen onClose={onClose} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
        <SelectItem>40</SelectItem>
      </Select>
    );

    const selectItem = screen.getAllByRole("listitem")[0];

    const spaceEvent = createEvent.keyDown(selectItem, {
      code: "Space",
    });

    fireEvent(selectItem, spaceEvent);

    expect(onClose).toHaveBeenCalledTimes(1);

    const arrowUpEvent = createEvent.keyDown(selectItem, {
      code: "ArrowUp",
    });

    fireEvent(selectItem, arrowUpEvent);

    expect(onClose).toHaveBeenCalledTimes(1);

    const arrowDownEvent = createEvent.keyDown(selectItem, {
      code: "ArrowDown",
    });

    fireEvent(selectItem, arrowDownEvent);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <Select
        isOpen
        onClose={jest.fn()}
        onOpen={jest.fn()}
        placeholder="Select"
      >
        <SelectItem>30</SelectItem>
        <div>40</div>
      </Select>
    );
    expect(screen.getByRole("listbox")).not.toHaveTextContent("40");
  });
  test("Should render label correctly.", () => {
    render(
      <Select
        onClose={jest.fn()}
        onOpen={jest.fn()}
        placeholder="Select"
      >
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  test("Should render correct Chevron when open.", () => {
    render(
      <Select isOpen onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByLabelText("Chevron Up")).toBeInTheDocument();
  });

  test("Should render correct Chevron when closed.", () => {
    render(
      <Select onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByLabelText("Chevron Down")).toBeInTheDocument();
  });
});
