import * as React from "react";
import styles from "./MenuContainer.module.scss";
import { useOnClickOutside } from "../../hooks";

export interface MenuContainerProps {
  /**
   * The content for the Menu
   */
  children: React.ReactNode;
  /**
   * The menu's ref
   */
  menuRef: React.RefObject<HTMLDivElement>;
  /**
   * The callback fired when the Menu closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The trigger for the Menu
   */
  triggerRef: React.RefObject<HTMLElement>;
}

export const MenuContainer: React.FC<MenuContainerProps> = (props) => {
  const { children, menuRef, onClose, triggerRef } = props;

  const [focusedMenuItem, setFocusedMenuItem] = React.useState<number>(0);

  const lastIndex = React.Children.count(children) - 1;

  const focusNextItem = () => {
    setFocusedMenuItem((prevIndex) =>
      prevIndex + 1 > lastIndex ? 0 : prevIndex + 1
    );
  };

  const focusPreviousItem = () => {
    setFocusedMenuItem((prevIndex) =>
      prevIndex - 1 < 0 ? lastIndex : prevIndex - 1
    );
  };

  React.useEffect(() => {
    const menuContainer = menuRef.current?.children[0] as HTMLElement;
    const menuItem = menuContainer.children[focusedMenuItem] as HTMLElement;
    menuItem?.focus();
  }, [focusedMenuItem]);

  useOnClickOutside([triggerRef, menuRef], onClose);

  return (
    <div className={styles.menuContainer} role="menu">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return React.cloneElement(child, {
            key: index,
            onClick: () => {
              onClose(child.props.children as string);
            },
            onKeyDown: (event: any) => {
              if (event.code === "Escape") {
                onClose();
                triggerRef.current?.focus();
              }
              if (event.code === "Enter") {
                onClose(child.props.children as string);
                setTimeout(() => triggerRef.current?.focus());
              }
              if (event.code === "ArrowUp") {
                focusPreviousItem();
              }
              if (event.code === "ArrowDown") {
                focusNextItem();
              }
            },
            role: "menuitem",
            tabIndex: index === focusedMenuItem ? 0 : undefined,
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};
