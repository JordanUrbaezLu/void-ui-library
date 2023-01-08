import * as React from "react";
interface AstroSelectItemProps {
  /**
   * The value for the AstroSelectItem
   */
  value: string;
}

const AstroSelectItem: React.FC<AstroSelectItemProps> = (props) => {
  const { value } = props;
  return <span>{value}</span>;
};

export default AstroSelectItem;
