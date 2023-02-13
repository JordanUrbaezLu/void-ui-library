import * as React from "react";
import { Panel } from "./Panel";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet";

export default {
  component: Panel,
  title: "Components/Panel",
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Panel
      content="Panel Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Panel!</Button>}
      title="Panel Title"
    />
  );
};

export const WithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Panel
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Panel Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Panel!</Button>}
      title="Panel Title"
    />
  );
};

export const WithNestedPanels = () => {
  const [isFirstPanelOpen, setIsFirstPanelOpen] =
    React.useState<boolean>(true);
  const [isSecondPanelOpen, setSecondPanelIsOpen] =
    React.useState<boolean>(true);

  return (
    <Panel
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Panel
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Panel Content"
            hasOverlay={false}
            isOpen={isSecondPanelOpen}
            onOpen={() => setSecondPanelIsOpen(true)}
            onClose={() => setSecondPanelIsOpen(false)}
            trigger={<Button>Open Second Panel!</Button>}
            title="Second Panel"
          />
        </ButtonSet>
      }
      content="Panel Content"
      isOpen={isFirstPanelOpen}
      onOpen={() => setIsFirstPanelOpen(true)}
      onClose={() => setIsFirstPanelOpen(false)}
      trigger={<Button>Open First Panel!</Button>}
      title="First Panel"
    />
  );
};
