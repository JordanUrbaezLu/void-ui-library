import classNames from "classnames";
import * as React from "react";
import styles from "./Switch.module.scss";

export type SwitchVariant = "primary" | "secondary";

export interface SwitchProps {
  /**
   * If the Switch is on
   *
   * @default false
   */
  isOn?: boolean;
  /**
   * The label for the Switch
   */
  label?: string;
  /**
   * The callback fired when the Switch is clicked
   */
  onClick: () => void;
  /**
   * The variant of the Switch
   *
   * @default "primary"
   */
  variant?: SwitchVariant;
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const { isOn = false, label, onClick, variant = "primary", ...rest } = props;

  const switchPill = classNames(
    styles.switchPill,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  const switchIndicator = classNames(
    styles.switchIndicator,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  const switchLabel = classNames(
    styles.switchLabel,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  return (
    <button
      aria-checked={isOn}
      className={switchPill}
      onClick={onClick}
      role="switch"
      type="button"
      {...rest}
    >
      <span className={switchIndicator} />
      {label && <span className={switchLabel}>{label}</span>}
    </button>
  );
};
