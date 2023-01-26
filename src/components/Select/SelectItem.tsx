import * as React from "react";
interface SelectItemProps {
  /**
   * The content for the SelectItem
   */
  children: string;
}

export const SelectItem: React.FC<SelectItemProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div role="menuitem" {...rest}>
      {children}
    </div>
  );
};
