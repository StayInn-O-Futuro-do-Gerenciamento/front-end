import { useEffect, useState } from "react";
import { options } from "../../utils";
import { SemiCircularChartMain } from "./style";
import ReactApexChart from "react-apexcharts";
import { floorInfo } from "../../utils/mocks/floor.mocks";
import anime from "animejs";

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
      anime({
        targets: ".chart-title",
        translateY: ["100%", 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentFloorIndex]);

  function calculateOccupancyPercentage(floor: FloorInfo): number {
    return (floor.occupied / (floor.occupied + floor.free)) * 100;
  }

  return (
    <SemiCircularChartMain>
      <h3 className="chart-title">{floorInfo[currentFloorIndex].floor}</h3>
      <div className="div-subtitle">
        <div className="occupied-point">
          <div className="orange-point"></div>
          <p>Ocupados</p>
        </div>
        <div>
          <div className="grey-point"></div>
          <p>Livres</p>
        </div>
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={350}
        width={350}
      />
    </SemiCircularChartMain>
  );
};
