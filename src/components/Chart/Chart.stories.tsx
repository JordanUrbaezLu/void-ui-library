import { Chart } from "./Chart";

export default {
  component: Chart,
  title: "Components/Chart",
};

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = [
  {
    name: "2018",
    Angular: getRandomInteger(4000, 5000),
    React: getRandomInteger(1000, 2000),
    Vue: getRandomInteger(0, 1000),
  },
  {
    name: "2019",
    Angular: getRandomInteger(4000, 5000),
    React: getRandomInteger(3000, 4000),
    Vue: getRandomInteger(500, 1500),
  },
  {
    name: "2020",
    Angular: getRandomInteger(2000, 3000),
    React: getRandomInteger(4000, 5000),
    Vue: getRandomInteger(2000, 3000),
  },
  {
    name: "2021",
    Angular: getRandomInteger(1000, 2000),
    React: getRandomInteger(5000, 6000),
    Vue: getRandomInteger(4000, 5000),
  },
];

const dataKeys = ["React", "Angular", "Vue"];

export const LineChart = () => (
  <Chart
    data={data}
    dataKeys={dataKeys}
    title="Most Popular Javascript Frameworks"
    type="line"
  />
);

export const BarChart = () => (
  <Chart
    data={data}
    dataKeys={dataKeys}
    title="Most Popular Javascript Frameworks"
    type="bar"
  />
);
