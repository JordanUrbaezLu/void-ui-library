import * as React from "react";
interface AstroSelectItemProps {
  /**
   * The content for the AstroSelectItem
   */
  children: string;
}

const AstroSelectItem: React.FC<AstroSelectItemProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div role="menuitem" {...rest}>
      {children}
    </div>
  );
};

export default AstroSelectItem;
