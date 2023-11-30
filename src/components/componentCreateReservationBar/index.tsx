import { useState, useEffect, useContext } from "react";
import { Button } from "../componentButton";
import { StyledReservationBar } from "./style";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export const ReservationBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { handleChangeFunction } = useContext(AppContext);

  const navigate = useNavigate();

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
      <Button
        type="button"
        buttonVariation="createBooking"
        onClick={() => navigate("/reservation")}
        className="cResevation"
      >
        Criar reserva
      </Button>
    </StyledReservationBar>
  );
};
