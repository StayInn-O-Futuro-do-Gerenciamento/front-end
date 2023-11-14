import { options } from "../../utils";
import { SemiCircularChartMain } from "./style";
import ReactApexChart from "react-apexcharts";

export const SemiCircularChart = () => {
  return (
    <SemiCircularChartMain>
      <h3>Andar 7</h3>
      <div>
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={280}
        />
        <div>
          <div className="occupied-point">
            <div className="orange-point"></div>
            <p>Ocupados</p>
          </div>
          <div>
            <div className="grey-point"></div>
            <p>Livres</p>
          </div>
        </div>
      </div>
    </SemiCircularChartMain>
  );
};
