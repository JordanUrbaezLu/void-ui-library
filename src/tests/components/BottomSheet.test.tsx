import { fireEvent, render, screen } from "@testing-library/react";
import { BottomSheet } from "../../components/BottomSheet/BottomSheet";
import { Button } from "../../components/Button/Button";
import { ButtonSet } from "../../components/ButtonSet/ButtonSet";
import { axe } from "jest-axe";

describe("BottomSheet", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <BottomSheet
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <BottomSheet
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );
    const results = axe(container, {
      rules: { tabindex: { enabled: false } },
    });
    expect(await results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should trigger onClose on Escape key down.", () => {
    const onClose = jest.fn();

    render(
      <BottomSheet
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test("Should render buttons correctly.", () => {
    render(
      <BottomSheet
        buttons={
          <ButtonSet>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Confirm</Button>
          </ButtonSet>
        }
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn()}
        onClose={jest.fn()}
        trigger={
          <Button variant="secondary">Open Bottom Sheet!</Button>
        }
        title="Bottom Sheet Title"
      />
    );
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
  test("Should render content correctly.", () => {
    render(
      <BottomSheet
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );
    expect(
      screen.getByText("Bottom Sheet Content")
    ).toBeInTheDocument();
  });

  test("Should render closed correctly.", () => {
    render(
      <BottomSheet
        content="Bottom Sheet Content"
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );
    expect(
      screen.queryByText("Bottom Sheet Title")
    ).not.toBeInTheDocument();
  });

  test("Should render title correctly.", () => {
    render(
      <BottomSheet
        content="Bottom Sheet Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Bottom Sheet Title"
      />
    );
    expect(
      screen.getByText("Bottom Sheet Title")
    ).toBeInTheDocument();
  });
});
