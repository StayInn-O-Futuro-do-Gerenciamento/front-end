import ReactApexChart from "react-apexcharts";
import options from "../../utils/chartsConfig/bar.config";
import { BarMain } from "./style";

export const BarChart = () => {
  const series = [
    {
      name: "Resevas",
      data: [20, 25, 18, 30, 90, 100, 22, 13, 99, 84, 2, 56],
    },
  ];
  return (
    <BarMain>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </BarMain>
  );
};
