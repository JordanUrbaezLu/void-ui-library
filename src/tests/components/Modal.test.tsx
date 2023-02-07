import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { ButtonSet } from "../../components/ButtonSet/ButtonSet";
import { axe } from "jest-axe";

describe("Modal", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Modal
        content="Modal Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Modal
        content="Modal Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );
    const results = axe(container, {
      rules: { tabindex: { enabled: false } },
    });
    expect(await results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should close on Escape key down.", () => {
    const onClose = jest.fn();

    render(
      <Modal
        content="Modal Content"
        isOpen
        onOpen={jest.fn}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test("Should render buttons correctly.", () => {
    render(
      <Modal
        buttons={
          <ButtonSet>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Confirm</Button>
          </ButtonSet>
        }
        content="Modal Content"
        isOpen
        onOpen={jest.fn()}
        onClose={jest.fn()}
        trigger={<Button variant="secondary">Open Modal!</Button>}
        title="Modal Title"
      />
    );
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
  test("Should render content correctly.", () => {
    render(
      <Modal
        content="Modal Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("Should render closed correctly.", () => {
    render(
      <Modal
        content="Modal Content"
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );
    expect(screen.queryByText("Modal Title")).not.toBeInTheDocument();
  });

  test("Should render title correctly.", () => {
    render(
      <Modal
        content="Modal Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Modal Title"
      />
    );
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });
});
