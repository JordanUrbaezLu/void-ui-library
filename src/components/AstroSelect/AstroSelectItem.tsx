import * as React from "react";
interface AstroSelectItemProps {
  value: string;
}

const AstroSelectItem: React.FC<AstroSelectItemProps> = ({ value }) => {
  return <span>{value}</span>;
};

export default AstroSelectItem;
