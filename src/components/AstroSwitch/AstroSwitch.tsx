import classNames from "classnames";
import * as React from "react";
import styles from "./AstroSwitch.module.scss";

export type AstroSwitchVariant = "primary" | "secondary";

export interface AstroSwitchProps {
  /**
   * If the AstroSwitch is on
   *
   * @default false
   */
  isOn?: boolean;
  /**
   * The label for the AstroSwitch
   */
  label?: string;
  /**
   * The callback fired when the AstroSwitch is clicked
   */
  onClick: () => void;
  /**
   * The variant of the AstroSwitch
   *
   * @default "primary"
   */
  variant?: AstroSwitchVariant;
}

export const AstroSwitch: React.FC<AstroSwitchProps> = (props) => {
  const { isOn = false, label, onClick, variant = "primary", ...rest } = props;

  const astroSwitchPill = classNames(
    styles.astroSwitchPill,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  const astroSwitchIndicator = classNames(
    styles.astroSwitchIndicator,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  const astroSwitchLabel = classNames(
    styles.astroSwitchLabel,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    isOn && styles.on
  );

  return (
    <button
      aria-checked={isOn}
      className={astroSwitchPill}
      onClick={onClick}
      role="switch"
      type="button"
      {...rest}
    >
      <span className={astroSwitchIndicator} />
      {label && <span className={astroSwitchLabel}>{label}</span>}
    </button>
  );
};
