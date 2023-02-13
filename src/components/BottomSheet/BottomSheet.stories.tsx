import * as React from "react";
import { BottomSheet } from "./BottomSheet";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet";

export default {
  component: BottomSheet,
  title: "Components/BottomSheet",
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <BottomSheet
      content="Bottom Sheet Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open BottomSheet!</Button>}
      title="Bottom Sheet Title"
    />
  );
};

export const WithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <BottomSheet
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Bottom Sheet Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Bottom Sheet!</Button>}
      title="Bottom Sheet Title"
    />
  );
};

export const WithNestedBottomSheets = () => {
  const [isFirstBottomSheetOpen, setIsFirstBottomSheetOpen] =
    React.useState<boolean>(true);
  const [isSecondBottomSheetOpen, setSecondBottomSheetIsOpen] =
    React.useState<boolean>(true);

  return (
    <BottomSheet
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <BottomSheet
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Bottom Sheet Content"
            hasOverlay={false}
            isOpen={isSecondBottomSheetOpen}
            onOpen={() => setSecondBottomSheetIsOpen(true)}
            onClose={() => setSecondBottomSheetIsOpen(false)}
            trigger={<Button>Open Second Bottom Sheet!</Button>}
            title="Second Bottom Sheet"
          />
        </ButtonSet>
      }
      content="Bottom Sheet Content"
      isOpen={isFirstBottomSheetOpen}
      onOpen={() => setIsFirstBottomSheetOpen(true)}
      onClose={() => setIsFirstBottomSheetOpen(false)}
      trigger={<Button>Open First Bottom Sheet!</Button>}
      title="First Bottom Sheet"
    />
  );
};
