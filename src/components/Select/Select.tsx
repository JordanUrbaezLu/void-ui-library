import { CSSTransition } from "react-transition-group";
import styles from "./Select.module.scss";
import itemStyles from "./SelectItem.module.scss";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as React from "react";
import { TextField } from "../TextField";

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

  return (
    <div className={styles.selectContainer}>
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
        <div className={styles.selectOptionsMenu} role="menu">
          {React.Children.map(children, (child, index) => {
            if (
              React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)
            ) {
              return React.cloneElement(child, {
                className: itemStyles.selectItem,
                key: index,
                onClick: () => {
                  setValue(child.props.children as string);
                  setIsOpen(!isOpen);
                },
              });
            } else {
              return null;
            }
          })}
        </div>
      </CSSTransition>
    </div>
  );
};
