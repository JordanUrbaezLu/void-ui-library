import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "./AstroMenu.module.scss";

export interface AstroMenuProps {
  /**
   * The content for the AstroMenu
   */
  children: React.ReactNode;
  /**
   * The callback fired when requested to change state
   */
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  /**
   * The trigger for the AstroMenu
   */
  trigger?: React.ReactElement;
}

const AstroMenu: React.FC<AstroMenuProps> = (props) => {
  const { children, setValue, trigger } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [focusedMenuItem, setFocusedMenuItem] = React.useState<number>(0);

  const menuRef = React.useRef<HTMLDivElement>(null);

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
      const child = menuRef.current?.children[focusedMenuItem] as HTMLElement;
      child?.focus();
    }
  }, [isOpen, focusedMenuItem]);

  return (
    <div className={styles.container}>
      {trigger ? (
        React.cloneElement(trigger, {
          onClick: () => setIsOpen(!isOpen),
        })
      ) : (
        <AiOutlineEllipsis
          className={styles.defaultTriggerContainer}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              setIsOpen(!isOpen);
            }
          }}
          role="button"
          tabIndex={0}
        />
      )}
      <CSSTransition
        in={isOpen}
        timeout={150}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
          <div className={styles.astroMenuContainer} ref={menuRef} role="menu">
            {React.Children.map(children, (child, index) => {
              if (
                React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)
              ) {
                return React.cloneElement(child, {
                  key: index,
                  onClick: () => {
                    if (setValue) {
                      setValue(child.props.children as string);
                    }
                    setIsOpen(false);
                  },
                  onKeyDown: (event: any) => {
                    if (event.code === "Enter" || event.code === "Escape") {
                      setIsOpen(false);
                    }
                    if (event.code === "ArrowUp") {
                      focusPreviousItem();
                    }
                    if (event.code === "ArrowDown") {
                      focusNextItem();
                    }
                  },
                  role: "menuitem",
                  tabIndex: 0,
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

export default AstroMenu;
