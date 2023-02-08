import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "../../components/Select/Select";
import { SelectItem } from "../../components/Select/SelectItem";
import { axe } from "jest-axe";
import { act } from "react-dom/test-utils";

describe("Select", () => {
  test("Should render component correctly.", () => {
    // Fixes some jest-axe issues
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    // Fixes some jest-axe issues
    const { container } = render(
      <Select>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Select>
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
      <Select>
        <SelectItem>30</SelectItem>
      </Select>
    );

    act(() => screen.getAllByRole("textbox")[0].click());

    expect(screen.getByText("30")).toBeInTheDocument();

    act(() => screen.getByRole("menuitem").click());
  });

  test("Should close Select on click outside.", () => {
    render(
      <Select startsOpen>
        <SelectItem>30</SelectItem>
      </Select>
    );

    fireEvent.mouseDown(document.body);
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    render(
      <Select label="Select">
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  test("Should render correct Chevron when open.", () => {
    render(
      <Select startsOpen>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByLabelText("Chevron Up")).toBeInTheDocument();
  });

  test("Should render correct Chevron when closed.", () => {
    render(
      <Select>
        <SelectItem>30</SelectItem>
      </Select>
    );
    expect(screen.getByLabelText("Chevron Down")).toBeInTheDocument();
  });
});
