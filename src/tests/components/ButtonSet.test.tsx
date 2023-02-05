import { render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";
import { ButtonSet } from "../../components/ButtonSet";
import { axe } from "jest-axe";

describe("ButtonSet", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <ButtonSet>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <ButtonSet>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonSet>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <ButtonSet>
        <Button>Button</Button>
      </ButtonSet>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("Should render flex direction correctly.", () => {
    render(
      <ButtonSet flexDirection="column">
        <Button>Button</Button>
      </ButtonSet>
    );
    expect(screen.getByRole("list")).toHaveClass("buttonSetColumn");
  });
});
