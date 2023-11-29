const yAxisLabelColor = "var(--grey-700)";
const barAxisLabelColor = "var(--grey-50)";
const barAxisColor = "var(--orange-400)";

export const options: ApexCharts.ApexOptions = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  colors: [barAxisColor],

  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 15,
        size: "60%",
      },
      track: {
        background: barAxisLabelColor,
      },

      dataLabels: {
        name: {
          offsetY: -30,
          show: false,
          color: barAxisColor,
          fontSize: "13px",
        },
        value: {
          offsetY: 5,
          color: yAxisLabelColor,
          fontSize: "30px",
          show: true,
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"],
};
