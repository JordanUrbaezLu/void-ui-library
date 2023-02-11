import classNames from "classnames";
import * as React from "react";
import { Divider } from "../Divider/Divider";
import styles from "./MenuDivider.module.scss";

/**
 * @public
 */
export const MenuDivider: React.FC<
  React.ComponentPropsWithoutRef<"span">
> = (props) => {
  const { className, ...rest } = props;
  return (
    <Divider
      className={classNames(className, styles.menuDivider)}
      direction="horizontal"
      stroke={1}
      {...rest}
    />
  );
};
