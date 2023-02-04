import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { axe } from "jest-axe";

describe("Modal", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Modal
        content="Modal Content"
        isOpen={false}
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
        isOpen={false}
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

// describe("Props", () => {
//   test("Should render content correctly.", () => {
//     render(
//       <Modal
//         content="Modal Content"
//         isOpen={false}
//         onOpen={jest.fn}
//         onClose={jest.fn()}
//         trigger={<Button>Trigger</Button>}
//         title="Modal Title"
//       />
//     );
//     expect(screen.getByText("Modal Content")).toBeInTheDocument();
//   });

//   test("Should render title correctly.", () => {
//     render(
//       <Modal
//         content="Modal Content"
//         isOpen={false}
//         onOpen={jest.fn}
//         onClose={jest.fn()}
//         trigger={<Button>Trigger</Button>}
//         title="Modal Title"
//       />
//     );
//     expect(screen.getByText("Modal Title")).toBeInTheDocument();
//   });
// });
