import { fireEvent, render, screen } from "@testing-library/react";
import { Panel } from "../../components/Panel/Panel";
import { Button } from "../../components/Button/Button";
import { ButtonSet } from "../../components/ButtonSet/ButtonSet";
import { axe } from "jest-axe";

describe("Panel", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Panel
        content="Panel Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Panel
        content="Panel Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
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
      <Panel
        content="Panel Content"
        isOpen
        onOpen={jest.fn}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
      />
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test("Should render buttons correctly.", () => {
    render(
      <Panel
        buttons={
          <ButtonSet>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Confirm</Button>
          </ButtonSet>
        }
        content="Panel Content"
        isOpen
        onOpen={jest.fn()}
        onClose={jest.fn()}
        trigger={<Button variant="secondary">Open Panel!</Button>}
        title="Panel Title"
      />
    );
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
  test("Should render content correctly.", () => {
    render(
      <Panel
        content="Panel Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
      />
    );
    expect(screen.getByText("Panel Content")).toBeInTheDocument();
  });

  test("Should render closed correctly.", () => {
    render(
      <Panel
        content="Panel Content"
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
      />
    );
    expect(screen.queryByText("Panel Title")).not.toBeInTheDocument();
  });

  test("Should render title correctly.", () => {
    render(
      <Panel
        content="Panel Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Panel Title"
      />
    );
    expect(screen.getByText("Panel Title")).toBeInTheDocument();
  });
});
