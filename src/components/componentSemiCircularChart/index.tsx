import { useEffect, useState } from "react";
import { options } from "../../utils";
import { SemiCircularChartMain } from "./style";
import ReactApexChart from "react-apexcharts";
import { floorInfo } from "../../utils/mocks/floor.mocks";

interface FloorInfo {
  floor: string;
  occupied: number;
  free: number;
}

export const SemiCircularChart = () => {
  const [currentFloorIndex, setCurrentFloorIndex] = useState(0);
  const [series, setSeries] = useState([
    calculateOccupancyPercentage(floorInfo[0]),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentFloorIndex + 1) % floorInfo.length;
      setCurrentFloorIndex(nextIndex);

      setSeries([calculateOccupancyPercentage(floorInfo[nextIndex])]);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentFloorIndex]);

  function calculateOccupancyPercentage(floor: FloorInfo): number {
    return (floor.occupied / (floor.occupied + floor.free)) * 100;
  }

  return (
    <SemiCircularChartMain>
      <h3>{floorInfo[currentFloorIndex].floor}</h3>
      <div>
        <ReactApexChart
          options={options}
          series={series}
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
