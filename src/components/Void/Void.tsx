import * as React from "react";
import { RingLoader } from "react-spinners";

export interface VoidProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The color of the Void
   */
  color?: string;
  /**
   * If the Void is shown
   */
  loading?: boolean;
  /**
   * The size of the Void
   */
  size?: number;
  /**
   * The animation speed of the Void
   */
  speedMultiplier?: number;
}

export const Void: React.FC<VoidProps> = (props) => {
  const {
    className,
    color = "#381438",
    loading,
    size,
    speedMultiplier,
    ...rest
  } = props;
  return (
    <RingLoader
      className={className}
      color={color}
      loading={loading}
      size={size}
      speedMultiplier={speedMultiplier}
      {...rest}
    />
  );
};

Void.displayName = "Void";
