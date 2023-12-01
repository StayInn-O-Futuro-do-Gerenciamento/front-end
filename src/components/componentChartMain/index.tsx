import { useEffect, useState, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import {
  monthsPT,
  monthsEN,
  reorderedMonthsPT,
  reorderedMonthsEN,
  updateChartOptions,
  reorderedMonthsES,
  monthsES,
} from "../../utils/chartsConfig/bar.config";
import { BarMain, LoadingBaseStyle } from "./style";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const BarChart = () => {
  const { getHistoryState } = useContext(AppContext);
  const { t, i18n } = useTranslation(["barChart"]);
  const [options, setOptions] = useState(
    updateChartOptions("#f9a63a", i18n.language.toLowerCase())
  );
  const lang = i18n.language.toLowerCase();

  const colorMode = localStorage.getItem("colorMode");
  const root = document.documentElement;
  const orange400 = getComputedStyle(root).getPropertyValue("--orange-400");
  useEffect(() => {
    let color;

    switch (JSON.parse(colorMode!)) {
      case "light":
        color = orange400;
        break;
      case "dark":
        color = orange400;
        break;
      default:
        color = "#f9a63a";
    }

    const updatedOptions = updateChartOptions(color, lang);
    setOptions(updatedOptions);
  }, [colorMode, lang, orange400]);

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

  const reorderedMonths =
    lang === "en"
      ? reorderedMonthsEN
      : lang === "es"
      ? reorderedMonthsES
      : reorderedMonthsPT;
  const listMonths =
    lang === "en" ? monthsEN : lang === "es" ? monthsES : monthsPT;

  const reorderedReservationsByMonth = reorderedMonths.map((month: any) => {
    const monthIndex = listMonths.indexOf(month);
    return reservationsByMonth[monthIndex];
  });
  const totalReservations = getHistoryState.length;

  const percentageByMonth = reorderedReservationsByMonth.map((count: any) =>
    ((count / totalReservations) * 100).toFixed(2)
  );
  const series = [
    {
      name: "Reservas",
      data: percentageByMonth.map((percentage: any, index: any) => ({
        x: reorderedMonths[index],
        y: percentage,
      })),
    },
  ];

  return (
    <BarMain>
      <h3> {t("title")}</h3>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={281}
      />
    </BarMain>
  );
};
