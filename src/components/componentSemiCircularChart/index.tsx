import { useContext, useEffect, useState } from "react";
import { options } from "../../utils";
import { LoadingBaseStyle, SemiCircularChartMain } from "./style";
import ReactApexChart from "react-apexcharts";
import anime from "animejs";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";

interface FloorInfo {
  floor: string;
  occupied: number;
  free: number;
}
interface Room {
  available: boolean;
  floor: string;
}

export const SemiCircularChart = () => {
  const { getRoomState } = useContext(AppContext);

  if (!getRoomState || getRoomState.length === 0) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"bubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  const createFloorInfo = (rooms: Room[]) => {
    const floors = {};

    rooms.forEach((room: any) => {
      const floor = room.floor;

      if (!floors[floor]) {
        floors[floor] = {
          floor,
          occupied: 0,
          free: 0,
        };
      }

      if (room.available) {
        floors[floor].free += 1;
      } else {
        floors[floor].occupied += 1;
      }
    });

    const floorInfoArray: FloorInfo[] = Object.values(floors);

    return floorInfoArray;
  };

  const floorInfo: FloorInfo[] = createFloorInfo(getRoomState);

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

  function calculateOccupancyPercentage(floor: any): number {
    if (!floor) return 0;

    const occupancyPercentage =
      (floor.occupied / (floor.occupied + floor.free)) * 100;

    return Number(occupancyPercentage.toFixed(2));
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
