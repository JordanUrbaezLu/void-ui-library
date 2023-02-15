import * as React from "react";
import styles from "./Alert.module.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiAlarmExclamation } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiAlertTriangle, FiX } from "react-icons/fi";
import { IconButton } from "../IconButton";

export type AlertVariant = "error" | "info" | "success" | "warning";

export interface AlertProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Alert.
   */
  children: string;
  /**
   * If the Alert can close.
   *
   * @default false
   */
  closeable?: boolean;
  /**
   * The variant for the Alert.
   *
   * @default "error"
   */
  variant?: AlertVariant;
}

/**
 * @public
 *
 * @description
 *
 * The Alert component is a notification towards an action a
 * user has recently taken.
 */
export const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    children,
    closeable = false,
    variant = "error",
    ...rest
  } = props;

  const alertContainer = classNames(
    className,
    styles.alertContainer,
    variant === "error" && styles.error,
    variant === "info" && styles.info,
    variant === "success" && styles.success,
    variant === "warning" && styles.warning
  );

  const alertTitle = classNames(
    styles.alertTitle,
    variant === "error" && styles.error,
    variant === "info" && styles.info,
    variant === "success" && styles.success,
    variant === "warning" && styles.warning
  );

  const alertIcon = (
    <>
      {variant === "error" && <BiAlarmExclamation color="red" />}
      {variant === "info" && <AiOutlineInfoCircle color="blue" />}
      {variant === "success" && <FaRegCheckCircle color="green" />}
      {variant === "warning" && <FiAlertTriangle color="orange" />}
    </>
  );

  const alertCloseButton = classNames(
    variant === "error" && styles.errorButton,
    variant === "info" && styles.infoButton,
    variant === "success" && styles.successButton,
    variant === "warning" && styles.warningButton
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
      <div className={alertContainer} {...rest}>
        <div>
          <div className={styles.alertTitleContainer}>
            <div className={styles.alertIcon}>{alertIcon}</div>
            <div className={alertTitle}>{variant?.toUpperCase()}</div>
          </div>
          <span>{children}</span>
        </div>
        {closeable && (
          <IconButton
            className={alertCloseButton}
            content={<FiX />}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </CSSTransition>
  );
};

Alert.displayName = "Alert";
