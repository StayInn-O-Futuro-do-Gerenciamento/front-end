import { useState, useEffect } from "react";
import { Button } from "../componentButton";
import { StyledReservationBar } from "./style";
import moment from "moment";
import "moment/dist/locale/pt-br";
import "moment/dist/locale/es";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ReservationBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { i18n, t } = useTranslation(["reservationBar", "sidebar"]);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let formattedDate;
  if (i18n.language === "pt") {
    moment.locale("pt-br");
    formattedDate = moment(currentDate).format(
      "dddd, D [de] MMMM [de] YYYY, HH:mm:ss"
    );
  } else if (i18n.language === "es") {
    moment.locale("es");
    formattedDate = moment(currentDate).format(
      "dddd, D [de] MMMM [de] YYYY, HH:mm:ss"
    );
  } else {
    moment.locale("en");
    formattedDate = moment(currentDate).format("dddd, MMMM D, YYYY, HH:mm:ss");
  }
  return (
    <StyledReservationBar>
      <div className="containerDateHour">
        <span className="dateHour">{formattedDate}</span>
      </div>
      <Button
        type="button"
        buttonVariation="createBooking"
        onClick={() => navigate("/reservation")}
        className="cResevation"
      >
        {t("createReservation")}
      </Button>
    </StyledReservationBar>
  );
};
