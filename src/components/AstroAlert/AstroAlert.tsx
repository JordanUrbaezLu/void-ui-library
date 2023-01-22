import * as React from "react";
import styles from "./AstroAlert.module.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiAlarmExclamation } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiAlertTriangle, FiX } from "react-icons/fi";

export type AstroAlertVariant = "error" | "info" | "success" | "warning";

export interface AstroAlertProps {
  /**
   * The content for the AstroAlert.
   */
  children: string;
  /**
   * If the AstroAlert can close.
   *
   * @default false
   */
  closeable?: boolean;
  /**
   * The variant for the AstroAlert.
   *
   * @default "error"
   */
  variant?: AstroAlertVariant;
}

export const AstroAlert: React.FC<AstroAlertProps> = (props) => {
  const { children, closeable = false, variant = "error" } = props;

  const astroAlertContainer = classNames(
    styles.astroAlertContainer,
    variant === "error" && styles.error,
    variant === "info" && styles.info,
    variant === "success" && styles.success,
    variant === "warning" && styles.warning
  );

  const astroAlertTitle = classNames(
    styles.astroAlertTitle,
    variant === "error" && styles.error,
    variant === "info" && styles.info,
    variant === "success" && styles.success,
    variant === "warning" && styles.warning
  );

  const astroAlertIcon = (
    <>
      {variant === "error" && <BiAlarmExclamation color="red" />}
      {variant === "info" && <AiOutlineInfoCircle color="blue" />}
      {variant === "success" && <FaRegCheckCircle color="green" />}
      {variant === "warning" && <FiAlertTriangle color="orange" />}
    </>
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <CSSTransition
      classNames={{ exitActive: styles.exitActive }}
      in={isOpen}
      timeout={400}
      mountOnEnter
      unmountOnExit
    >
      <div className={astroAlertContainer}>
        <div>
          <div className={styles.astroAlertTitleContainer}>
            <div className={styles.astroAlertIcon}>{astroAlertIcon}</div>
            <div className={astroAlertTitle}>{variant?.toUpperCase()}</div>
          </div>
          <span>{children}</span>
        </div>
        {closeable && (
          <FiX
            className={styles.astroAlertCloseButton}
            onClick={() => {
              setIsOpen(false);
            }}
            size="30px"
          />
        )}
      </div>
    </CSSTransition>
  );
};

