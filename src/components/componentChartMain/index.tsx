import { useEffect, useState, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import {
  months,
  reorderedMonths,
  updateChartOptions,
} from "../../utils/chartsConfig/bar.config";
import { BarMain, LoadingBaseStyle } from "./style";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";

export const BarChart = () => {
  const { getHistoryState } = useContext(AppContext);
  const [options, setOptions] = useState(updateChartOptions("#f9a63a"));

  const colorMode = localStorage.getItem("colorMode");
  useEffect(() => {
    let color;

    switch (JSON.parse(colorMode!)) {
      case "light":
      case "dark":
        color = "#f9a63a";
        break;
      case "light/blue":
        color = "#448df2";
        break;
      case "light/red":
        color = "#f36960";
        break;
      case "light/green":
        color = "#41c588";
        break;
      case "dark/blue":
        color = "#1570ef";
        break;
      case "dark/red":
        color = "#f04438";
        break;
      case "dark/green":
        color = "#12b76a";
        break;
      default:
        color = "#f9a63a";
    }

    const updatedOptions = updateChartOptions(color);
    setOptions(updatedOptions);
  }, [colorMode]);

  if (!getHistoryState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"bubbles"}
          color={"var(--orange-400)"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  const reservationsByMonth = Array.from({ length: 12 }, () => 0);

  getHistoryState.forEach((reservation: any) => {
    const checkinMonth = new Date(reservation.checkin).getMonth();
    reservationsByMonth[checkinMonth]++;
  });

  const reorderedReservationsByMonth = reorderedMonths.map((month) => {
    const monthIndex = months.indexOf(month);
    return reservationsByMonth[monthIndex];
  });
  const totalReservations = getHistoryState.length;

  const percentageByMonth = reorderedReservationsByMonth.map((count) =>
    ((count / totalReservations) * 100).toFixed(2)
  );
  const series = [
    {
      name: "Reservas",
      data: percentageByMonth.map((percentage, index) => ({
        x: reorderedMonths[index],
        y: percentage,
      })),
    },
  ];

  return (
    <BarMain>
      <h3>Status da Ocupação</h3>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={281}
      />
    </BarMain>
  );
};
