import { useState, useEffect } from "react";
import { Button } from "../componentButton";
import { StyledReservationBar } from "./style";

export const ReservationBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleString("pt-BR");

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
