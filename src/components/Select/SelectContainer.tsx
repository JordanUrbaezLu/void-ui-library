import * as React from "react";
import styles from "./SelectContainer.module.scss";
import itemStyles from "./SelectItem.module.scss";

export interface SelectContainerProps {
  /**
   * The content for the SelectContainer
   */
  children: React.ReactNode;
  /**
   * The callback fired when requesting to show or hide the SelectContainer
   */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * The callback fired when requesting to change the value
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectContainer: React.FC<SelectContainerProps> = (
  props
) => {
  const { children, setIsOpen, setValue } = props;

  return (
    <div className={styles.selectOptionsMenu} role="menu">
      {React.Children.map(children, (child, index) => {
        const selectItem = child as React.ReactElement;

        return React.cloneElement(selectItem, {
          className: itemStyles.selectItem,
          key: index,
          onClick: () => {
            setValue(selectItem.props.children as string);
            setIsOpen((prev) => !prev);
          },
        });
      })}
    </div>
  );
};
