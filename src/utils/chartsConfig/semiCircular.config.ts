export const options: ApexCharts.ApexOptions = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  colors: ["#F9A63A"],

  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 15,
        size: "60%",
      },
      track: {
        background: "#d0d3d9",
      },

      dataLabels: {
        name: {
          offsetY: -30,
          show: false,
          color: "#F9A63A",
          fontSize: "13px",
        },
        value: {
          offsetY: 5,
          color: "#2b2f38",
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
