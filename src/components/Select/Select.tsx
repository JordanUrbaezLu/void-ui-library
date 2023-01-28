import { CSSTransition } from "react-transition-group";
import styles from "./Select.module.scss";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as React from "react";
import { TextField } from "../TextField";
import { SelectContainer } from "./SelectContainer";
import { useOnClickOutside } from "../../hooks";

export interface SelectProps {
  /**
   * The content for the Select
   */
  children: React.ReactNode;
  /**
   * If the Select initially renders as open
   *
   * @default false
   */
  startsOpen?: boolean;
  /**
   * The label for the Select
   */
  label?: string;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { children, label, startsOpen = false } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(startsOpen);
  const [value, setValue] = React.useState<string>("");
  const selectRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(selectRef, () => setIsOpen(false));

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <TextField
        size="large"
        selectable={false}
        onChange={() => {}}
        value={value}
        label={label}
        className={styles.inputContainer}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <IoChevronUpSharp className={styles.icon} />
      ) : (
        <IoChevronDownSharp className={styles.icon} />
      )}
      <CSSTransition
        in={isOpen}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <SelectContainer setIsOpen={setIsOpen} setValue={setValue}>
          {children}
        </SelectContainer>
      </CSSTransition>
    </div>
  );
};
