import ReactApexChart from "react-apexcharts";
import {
  options,
  months,
  reorderedMonths,
} from "../../utils/chartsConfig/bar.config";
import { BarMain } from "./style";
import { history } from "../../utils/mocks/resevation.mocks";

export const BarChart = () => {
  const reservationsByMonth = Array.from({ length: 12 }, () => 0);

  history.forEach((reservation) => {
    const checkinMonth = new Date(reservation.checkin).getMonth();
    reservationsByMonth[checkinMonth]++;
  });

  const reorderedReservationsByMonth = reorderedMonths.map((month) => {
    const monthIndex = months.indexOf(month);
    return reservationsByMonth[monthIndex];
  });
  const totalReservations = history.length;

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
        height={350}
      />
    </BarMain>
  );
};
