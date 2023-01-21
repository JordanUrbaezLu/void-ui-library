import classNames from "classnames";
import * as React from "react";
import styles from "./AstroCheckbox.module.scss";
import { BiCheckSquare } from "react-icons/bi";

export type AstroCheckboxVariant = "primary" | "secondary";

export interface AstroCheckboxProps {
  /**
   * If the AstroCheckbox is on
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * The label for the AstroCheckbox
   */
  label?: string;
  /**
   * The callback fired when the AstroCheckbox is clicked
   */
  onClick: () => void;
  /**
   * The variant of the AstroCheckbox
   *
   * @default "primary"
   */
  variant?: AstroCheckboxVariant;
}

const AstroSwitch: React.FC<AstroCheckboxProps> = (props) => {
  const {
    isChecked = false,
    label,
    onClick,
    variant = "primary",
    ...rest
  } = props;

  const astroCheckboxIcon = classNames(
    styles.astroCheckboxIcon,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary
  );

  const astroCheckboxBorder = classNames(
    styles.astroCheckboxBorder,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary
  );

  const astroCheckboxLabel = classNames(
    styles.astroCheckboxLabel,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isChecked && styles.checked
  );

  return (
    <div className={styles.astroCheckboxContainer} role="checkbox">
      <div className={styles.astroCheckbox} {...rest}>
        {isChecked && (
          <BiCheckSquare
            className={astroCheckboxIcon}
            size={34}
            viewBox="3 3 18.1 18.1"
          />
        )}
        <div className={astroCheckboxBorder} onClick={onClick} />
      </div>
      {label && <span className={astroCheckboxLabel}>{label}</span>}
    </div>
  );
};

export default AstroSwitch;
