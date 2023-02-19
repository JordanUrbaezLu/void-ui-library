import * as React from "react";
import classNames from "classnames";
import styles from "./Radio.module.scss";
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography/Typography";

export interface RadioProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The label for the Radio
   */
  children: React.ReactNode;
  /**
   * If the Radio is selected
   *
   * @default false
   */
  isSelected?: boolean;
  /**
   * The callback fired when requesting to change the Radio state
   */
  onChange: () => void;
}

/**
 * @public
 *
 * @description
 *
 * The Radio allows a user to select an item.
 */
export const Radio: React.FC<RadioProps> = (props) => {
  const {
    children,
    className,
    isSelected = false,
    onChange,
    ...rest
  } = props;

  return (
    <div className={styles.container}>
      <IconButton
        className={classNames(
          className,
          isSelected && styles.isSelected,
          styles.radioIcon
        )}
        content={
          isSelected ? (
            <MdRadioButtonChecked />
          ) : (
            <MdRadioButtonUnchecked />
          )
        }
        onClick={onChange}
        role="radio"
        {...rest}
      />
      <Typography
        className={classNames(isSelected && styles.selected)}
        variant="secondary"
      >
        {children}
      </Typography>
    </div>
  );
};

Radio.displayName = "Radio";
