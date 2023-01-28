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

export const SelectContainer: React.FC<SelectContainerProps> = (props) => {
  const { children, setIsOpen, setValue } = props;

  return (
    <div className={styles.selectOptionsMenu} role="menu">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return React.cloneElement(child, {
            className: itemStyles.selectItem,
            key: index,
            onClick: () => {
              setValue(child.props.children as string);
              setIsOpen((prev) => !prev);
            },
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};
