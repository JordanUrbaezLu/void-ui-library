import { fireEvent, render, screen } from "@testing-library/react";
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
  test("Should open SelectContainer on click.", () => {
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

  test("Should close Select on click outside.", () => {
    render(
      <Select onClose={jest.fn()} onOpen={jest.fn()}>
        <SelectItem>30</SelectItem>
      </Select>
    );

    fireEvent.mouseDown(document.body);
  });
});

describe("Props", () => {
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
