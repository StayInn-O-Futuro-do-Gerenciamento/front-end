import { ApexOptions } from "apexcharts";

const currentMonthIndex = new Date().getMonth();
const xAxisLabelColor = "var(--grey-700)";
const yAxisLabelColor = "var(--grey-700)";

export const monthsPT = [
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

export const monthsEN = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
export const monthsES = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];
export const reorderedMonthsPT = [
  ...monthsPT.slice(currentMonthIndex + 1),
  ...monthsPT.slice(0, currentMonthIndex + 1),
];

export const reorderedMonthsEN = [
  ...monthsEN.slice(currentMonthIndex + 1),
  ...monthsEN.slice(0, currentMonthIndex + 1),
];

export const reorderedMonthsES = [
  ...monthsES.slice(currentMonthIndex + 1),
  ...monthsES.slice(0, currentMonthIndex + 1),
];

export const updateChartOptions = (cor: string, lang: string): ApexOptions => {
  const reorderedMonths =
    lang === "en"
      ? reorderedMonthsEN
      : lang === "es"
      ? reorderedMonthsES
      : reorderedMonthsPT;
  // const reorderedMonths = lang === "en" ? reorderedMonthsEN : reorderedMonthsPT;

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
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
      labels: {
        style: {
          colors: yAxisLabelColor,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
        style: {
          colors: xAxisLabelColor,
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
      colors: [cor],
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

  return options;
};
