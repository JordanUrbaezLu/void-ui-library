import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Menu.module.scss";
import { getMenuAlignmentCalculations } from "../../utility/getMenuAlignmentCalculations";
import { MenuContainer } from "./MenuContainer";
import classNames from "classnames";

export type MenuAlignment =
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "topLeft"
  | "topCenter"
  | "topRight";

export interface MenuProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The Menu's alignment relative to its trigger
   *
   * @default "bottomLeft"
   */
  alignment?: MenuAlignment;
  /**
   * The content for the Menu
   */
  children: React.ReactNode;
  /**
   * If the Menu is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Menu closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The callback fired when the Menu opens
   */
  onOpen: () => void;
  /**
   * The trigger for the Menu
   */
  trigger: React.ReactElement;
}

/**
 * @public
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const {
    alignment = "bottomLeft",
    className,
    children,
    isOpen = false,
    onClose,
    onOpen,
    trigger,
    ...rest
  } = props;

  const menuRef = React.useRef<HTMLDivElement>(null);

  const [menuAlignmentStyle, setMenuAlignmentStyle] =
    React.useState<React.CSSProperties | undefined>(undefined);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    setMenuAlignmentStyle(
      getMenuAlignmentCalculations({
        menuRef,
        triggerRef,
        alignment,
      })
    );
  }, []);

  return (
    <div
      className={classNames(className, styles.container)}
      {...rest}
    >
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
        className={styles.menuLayoutContainer}
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
          <MenuContainer
            menuRef={menuRef}
            onClose={onClose}
            triggerRef={triggerRef}
          >
            {children}
          </MenuContainer>
        </CSSTransition>
      </div>
    </div>
  );
};
