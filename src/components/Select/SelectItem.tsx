import * as React from "react";
interface SelectItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the SelectItem
   */
  children: string;
}

/**
 * @public
 */
export const SelectItem: React.FC<SelectItemProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={className} role="menuitem" {...rest}>
      {children}
    </div>
  );
};
