import classNames from "classnames";
import * as React from "react";
import styles from "./Switch.module.scss";

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
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const { isOn = false, label, onClick, ...rest } = props;

  const switchPill = classNames(
    styles.switchPill,
    isOn && styles.on
  );

  const switchIndicator = classNames(
    styles.switchIndicator,
    isOn && styles.on
  );

  const switchLabel = classNames(
    styles.switchLabel,
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
