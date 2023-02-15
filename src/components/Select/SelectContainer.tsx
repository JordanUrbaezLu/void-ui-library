import classNames from "classnames";
import * as React from "react";
import { SelectProps } from "./Select";
import styles from "./SelectContainer.module.scss";
import itemStyles from "./SelectItem.module.scss";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";

export interface SelectContainerProps extends SelectProps {
  /**
   * The callback fired when requesting to change selected index
   */
  onSetSelectedIndex: (index: number) => void;
  /**
   * The ref for the Select
   */
  selectRef: React.RefObject<HTMLDivElement>;
}

/**
 * @private
 */
export const SelectContainer: React.FC<SelectContainerProps> = (
  props
) => {
  const {
    children,
    selected,
    onClose,
    onOpen,
    isOpen,
    onSetSelectedIndex,
    selectRef,
  } = props;

  useOnClickOutside(selectRef, onClose);
  useOnKeyDown(["Escape"], onClose);

  return (
    <div className={styles.selectOptionsMenu} role="listbox">
      {React.Children.map(children, (child, index) => {
        const selectItem = child as React.ReactElement;

        return React.cloneElement(selectItem, {
          className: classNames(
            itemStyles.selectItem,
            selected === index && itemStyles.selected
          ),
          key: index,
          onClick: () => {
            if (isOpen) {
              onClose();
            } else {
              onOpen();
            }
            onSetSelectedIndex(index);
          },
          role: "listitem",
        });
      })}
    </div>
  );
};

SelectContainer.displayName = "SelectContainer";
