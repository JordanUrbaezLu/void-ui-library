import * as React from "react";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";

export type ChartType = "line" | "bar";

export interface ChartProps {
  /**
   * The data for the Chart
   */
  data: Array<Object>;
  /**
   * The data keys for the LineChart
   */
  dataKeys: Array<string>;
  /**
   * The title for the LineChart
   */
  title: string;
  /**
   * The type for the Chart
   * 
   * @default "line"
   */
  type?: ChartType;
}

export const Chart: React.FC<ChartProps> = (props) => {
  const { data, dataKeys, title, type = "line" } = props;
  const strokes = [
    "#4c00b0",
    "#8a00c2",
    "#b100cd",
    "#ca5cdd",
    "#e8bcf0",
  ];

  return type === "line" ? (
    <LineChart
      data={data}
      dataKeys={dataKeys}
      strokes={strokes}
      title={title}
    />
  ) : (
    <BarChart
      data={data}
      dataKeys={dataKeys}
      strokes={strokes}
      title={title}
    />
  );
};
