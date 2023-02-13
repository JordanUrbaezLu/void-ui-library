import * as React from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet";

export default {
  component: Modal,
  title: "Components/Modal",
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Modal
      content="Modal Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Modal!</Button>}
      title="Modal Title"
    />
  );
};

export const WithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Modal
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Modal Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Modal!</Button>}
      title="Modal Title"
    />
  );
};

export const WithNestedModals = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] =
    React.useState<boolean>(true);
  const [isSecondModalOpen, setSecondModalIsOpen] =
    React.useState<boolean>(true);

  return (
    <Modal
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Modal
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Modal Content"
            hasOverlay={false}
            isOpen={isSecondModalOpen}
            onOpen={() => setSecondModalIsOpen(true)}
            onClose={() => setSecondModalIsOpen(false)}
            trigger={<Button>Open Second Modal!</Button>}
            title="Modal Title"
          />
        </ButtonSet>
      }
      content="Modal Content"
      isOpen={isFirstModalOpen}
      onOpen={() => setIsFirstModalOpen(true)}
      onClose={() => setIsFirstModalOpen(false)}
      trigger={<Button>Open First Modal!</Button>}
      title="Modal Title"
    />
  );
};
