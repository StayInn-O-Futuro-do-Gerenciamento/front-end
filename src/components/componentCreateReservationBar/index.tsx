import { useState, useEffect } from "react";
import { Button } from "../componentButton";
import { StyledReservationBar } from "./style";
import moment from "moment";
import "moment/dist/locale/pt-br";

export const ReservationBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  moment.locale("pt-br");
  const formattedDate = moment(currentDate).format(
    "dddd, D [de] MMMM [de] YYYY, HH:mm:ss"
  );

  return (
    <StyledReservationBar>
      <div className="containerDateHour">
        <span className="dateHour">{formattedDate}</span>
      </div>
      <Button type="button" buttonVariation="createBooking">
        Criar reserva
      </Button>
    </StyledReservationBar>
  );
};
