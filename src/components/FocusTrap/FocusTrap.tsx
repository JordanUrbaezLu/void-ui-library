import * as React from "react";
import FocusLock from "react-focus-lock";

export interface FocusTrapProps
  extends React.ComponentProps<typeof FocusLock> {
  /**
   * The content for the Focus Trap
   */
  children: React.ReactNode;
  /**
   * If the Focus Trap return focus to trigger
   *
   * @default true
   */
  returnFocus?: boolean;
}

/**
 * @public
 */
export const FocusTrap: React.FC<FocusTrapProps> = (props) => {
  const { children, returnFocus = true, ...rest } = props;

  return (
    <FocusLock returnFocus={returnFocus} {...rest}>
      {children}
    </FocusLock>
  );
};
