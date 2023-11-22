import ReactApexChart from "react-apexcharts";
import { useContext } from "react";
import {
  options,
  months,
  reorderedMonths,
} from "../../utils/chartsConfig/bar.config";
import { BarMain } from "./style";
import { AppContext } from "../../context/appContext";

export const BarChart = () => {
  const { getHistoryState } = useContext(AppContext);
  if (!getHistoryState) {
    return (
      <BarMain>
        <h3>Loading...</h3>
      </BarMain>
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
