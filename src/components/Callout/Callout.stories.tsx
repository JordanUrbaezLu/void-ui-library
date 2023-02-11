import * as React from "react";
import { Button } from "../Button/Button";
import { Callout } from "./Callout";

export default {
  component: Callout,
  parameters: {
    layout: "centered",
  },
  title: "Components/Callout",
};

export const Bottom = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: 400,
        width: "100%",
      }}
    >
      <Callout
        content="I am a Callout!"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
        targetRef={ref}
      >
        <Button onClick={() => setIsOpen(true)} ref={ref}>
          Open Callout
        </Button>
      </Callout>
    </div>
  );
};

export const Top = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <Callout
      content="I am a Callout!"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="top"
      targetRef={ref}
    >
      <Button onClick={() => setIsOpen(true)} ref={ref}>
        Open Callout
      </Button>
    </Callout>
  );
};

export const Left = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <Callout
      content="I am a Callout!"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="left"
      targetRef={ref}
    >
      <Button onClick={() => setIsOpen(true)} ref={ref}>
        Open Callout
      </Button>
    </Callout>
  );
};

export const Right = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <Callout
      content="I am a Callout!"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="right"
      targetRef={ref}
    >
      <Button onClick={() => setIsOpen(true)} ref={ref}>
        Open Callout
      </Button>
    </Callout>
  );
};
