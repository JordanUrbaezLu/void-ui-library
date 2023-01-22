import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroMenu.module.scss";
import { getAstroMenuAlignmentCalculations } from "../../utility/getAstroMenuAlignmentCalculations";
import { useOnClickOutside } from "../../hooks";

export type AstroMenuAlignment =
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "topLeft"
  | "topCenter"
  | "topRight";

export interface AstroMenuProps {
  /**
   * The Menu's alignment relative to its trigger
   *
   * @default "bottomLeft"
   */
  alignment?: AstroMenuAlignment;
  /**
   * The content for the AstroMenu
   */
  children: React.ReactNode;
  /**
   * If the AstroMenu is open
   */
  isOpen: boolean;
  /**
   * The callback fired when the AstroMenu closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The callback fired when the AstroMenu opens
   */
  onOpen: () => void;
  /**
   * The trigger for the AstroMenu
   */
  trigger: React.ReactElement;
}

export const AstroMenu: React.FC<AstroMenuProps> = (props) => {
  const {
    alignment = "bottomLeft",
    children,
    isOpen,
    onClose,
    onOpen,
    trigger,
  } = props;

  const [focusedMenuItem, setFocusedMenuItem] = React.useState<number>(0);

  const menuRef = React.useRef<HTMLDivElement>(null);

  const [menuAlignmentStyle, setMenuAlignmentStyle] =
    React.useState<React.CSSProperties | undefined>(undefined);

  const triggerRef = React.useRef<HTMLDivElement>(null);

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
    if (isOpen) {
      const menuContainer = menuRef.current?.children[0] as HTMLElement;
      const menuItem = menuContainer.children[focusedMenuItem] as HTMLElement;
      menuItem?.focus();
    }
  }, [isOpen, focusedMenuItem]);

  React.useLayoutEffect(() => {
    setMenuAlignmentStyle(
      getAstroMenuAlignmentCalculations({
        menuRef,
        triggerRef,
        alignment,
      })
    );
  }, []);

  useOnClickOutside(triggerRef, onClose);

  return (
    <div className={styles.container}>
      {React.cloneElement(trigger, {
        onClick: () => {
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        },
        ref: triggerRef,
        role: "button",
        tabIndex: 0,
      })}
      <div
        className={styles.astroMenuLayoutContainer}
        style={menuAlignmentStyle}
        ref={menuRef}
      >
        <CSSTransition
          in={isOpen}
          timeout={150}
          mountOnEnter
          unmountOnExit
          classNames={
            alignment.startsWith("bottom")
              ? {
                  enter: styles.enterBottom,
                  enterActive: styles.enterBottomActive,
                  exit: styles.exitBottom,
                  exitActive: styles.exitBottomActive,
                }
              : {
                  enter: styles.enterTop,
                  enterActive: styles.enterTopActive,
                  exit: styles.exitTop,
                  exitActive: styles.exitTopActive,
                }
          }
        >
          <div className={styles.astroMenuContainer} role="menu">
            {React.Children.map(children, (child, index) => {
              if (
                React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)
              ) {
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
        </CSSTransition>
      </div>
    </div>
  );
};
