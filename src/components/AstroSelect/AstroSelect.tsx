import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import styles from "./AstroSelect.module.scss";
import itemStyles from "./AstroSelectItem.module.scss";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as React from "react";

export type AstroSelectVariant = "primary" | "secondary";
export type AstroSelectSize = "small" | "medium" | "large";

export interface AstroSelectProps {
  /**
   * The content for the AstroSelect
   */
  children: React.ReactNode;
  /**
   * The label for the AstroSelect
   */
  label?: string;
  /**
   * The size of the AstroSelect
   *
   * @default "medium"
   */
  size?: AstroSelectSize;
  /**
   * The variant of the AstroSelect
   *
   * @default "primary"
   */
  variant?: AstroSelectVariant;
}

const AstroSelect: React.FC<AstroSelectProps> = (props) => {
  const { children, label, variant = "primary", size = "medium" } = props;
  const containerClasses = classNames(
    styles.astroSelectContainer,
    size === "small" && styles.smallContainer,
    size === "medium" && styles.mediumContainer,
    size === "large" && styles.largeContainer
  );

  const selectOptionsMenu = classNames(
    styles.selectOptionsMenu,
    size === "small" && styles.smallOptionsMenu,
    size === "medium" && styles.mediumOptionsMenu,
    size === "large" && styles.largeOptionsMenu
  );

  const labelClasses = classNames(
    styles.label,
    size === "small" && styles.smallLabel,
    size === "medium" && styles.mediumLabel,
    size === "large" && styles.largeLabel,
    variant === "primary" && styles.primaryLabel,
    variant === "secondary" && styles.secondaryLabel
  );

  const classes = classNames(
    styles.astroSelect,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large
  );

  const iconClasses = classNames(
    styles.icon,
    variant === "primary" && styles.primaryIcon,
    variant === "secondary" && styles.secondaryIcon,
    size === "small" && styles.smallIcon,
    size === "medium" && styles.mediumIcon,
    size === "large" && styles.largeIcon
  );

  const itemClasses = classNames(
    itemStyles.astroSelectItem,
    size === "small" && itemStyles.small,
    size === "medium" && itemStyles.medium,
    size === "large" && itemStyles.large
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  return (
    <div className={containerClasses}>
      {label && <div className={labelClasses}>{label}</div>}
      <div className={classes}>
        <div style={{ paddingLeft: "4px" }}>{value}</div>
        <div className={iconClasses} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </div>
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
        <div className={selectOptionsMenu}>
          {React.Children.map(children, (child) => {
            const selectItem = child as React.ReactElement;
            return (
              <div
                onClick={() => {
                  setValue(selectItem.props.value);
                  setIsOpen(!isOpen);
                }}
                className={itemClasses}
              >
                {selectItem}
              </div>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default AstroSelect;
