import { useContext } from "react";
import { LoadingBaseStyle, StyledOverview } from "./style";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";

export const Overview = () => {
  const { getReservationState, getRoomState, hotel } = useContext(AppContext);

  console.log(hotel);

  if (!getReservationState || !getRoomState) {
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

  const today = new Date().toISOString().split("T")[0];

  const todaysCheckIns = getReservationState.filter(
    (reservation: any) => reservation.checkin.split("T")[0] === today
  );
  const todaysCheckOuts = getReservationState.filter(
    (reservation: any) => reservation.checkout.split("T")[0] === today
  );

  const totalAdults = todaysCheckIns.reduce(
    (acc: any, reservation: any) => acc + reservation.numberAdults,
    0
  );
  const totalKids = todaysCheckIns.reduce(
    (acc: any, reservation: any) => acc + reservation.numberKids,
    0
  );

  const availableRooms = Array.isArray(getRoomState)
    ? getRoomState.filter((room) => room.available === true)
    : [];
  const unavailableRooms = Array.isArray(getRoomState)
    ? getRoomState.filter((room) => room.available === false)
    : [];

  const roomCount = hotel?.numberRoomsTotal;

  return (
    <StyledOverview>
      <div>
        <h3>Visão geral</h3>
      </div>
      <div className="infoHotel">
        <div className="infos">
          <div className="infoDetail">
            <span>Hoje</span>
            <p>Check-in</p>
          </div>
          <span>{todaysCheckIns.length}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Hoje</span>
            <p>Check-out</p>
          </div>
          <span>{todaysCheckOuts.length}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total de pessoas</span>
            <p>No hotel</p>
          </div>
          <span>{totalAdults + totalKids}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total</span>
            <p>Quartos disponiveis</p>
          </div>
          <span>
            {availableRooms.length === 0 ? roomCount : availableRooms.length}
          </span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total</span>
            <p>Quartos ocupados</p>
          </div>
          <span>{unavailableRooms.length}</span>
        </div>
      </div>
    </StyledOverview>
  );
};
