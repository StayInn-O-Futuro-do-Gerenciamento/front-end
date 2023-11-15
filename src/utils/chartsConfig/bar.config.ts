import { ApexOptions } from "apexcharts";

const currentMonthIndex = new Date().getMonth();

export const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

export const reorderedMonths = [
  ...months.slice(currentMonthIndex + 1),
  ...months.slice(0, currentMonthIndex + 1),
];

export const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: reorderedMonths,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
    min: 0,
    max: 100,
  },
  grid: {
    show: true,
    borderColor: "#f0f1f3",
    row: {
      colors: undefined,
      opacity: 0.2,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  fill: {
    colors: ["#F9A63A"],
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 0.1,
      opacityFrom: 1,
      opacityTo: 0.6,
      stops: [0, 90, 100],
    },
  },
};