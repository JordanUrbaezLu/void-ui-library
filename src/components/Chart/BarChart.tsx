import * as React from "react";
import {
  CartesianGrid,
  Legend,
  Bar,
  BarChart as RechartsBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.scss";

export interface BarChartProps {
  /**
   * The data for the LineChart
   */
  data: Array<Object>;
  /**
   * The data keys for the LineChart
   */
  dataKeys: Array<string>;
  /**
   * The strokes for the LineChart
   */
  strokes: Array<string>;
  /**
   * The title for the LineChart
   */
  title: string;
}

export const BarChart: React.FC<BarChartProps> = (props) => {
  const { data, dataKeys, strokes, title } = props;
  return (
    <RechartsBarChart
      className={styles.font}
      width={data.length * 150}
      height={400}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <text
        x={500 / 2}
        y={20}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="14">{title}</tspan>
      </text>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      {dataKeys.map((dataKey, index) => {
        return (
          <Bar
            dataKey={dataKey}
            key={index}
            fill={strokes[index]}
          />
        );
      })}
    </RechartsBarChart>
  );
};