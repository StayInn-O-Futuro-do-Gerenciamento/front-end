import { useContext } from "react";
import { LoadingBaseStyle, StyledOverview } from "./style";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const Overview = () => {
  const { getReservationState, getRoomState, hotel } = useContext(AppContext);
  const { t } = useTranslation(["overview"]);

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

  const currentDate = new Date();

  const guestsCurrentlyInHotel = getReservationState.filter(
    (reservation: any) => {
      const checkinDate = new Date(reservation.checkin.split("T")[0]);
      const checkoutDate = new Date(reservation.checkout.split("T")[0]);

      return checkinDate <= currentDate && checkoutDate >= currentDate;
    }
  );

  const todaysCheckIns = guestsCurrentlyInHotel.filter(
    (reservation: any) =>
      reservation.checkin.split("T")[0] ===
      currentDate.toISOString().split("T")[0]
  );
  const todaysCheckOuts = guestsCurrentlyInHotel.filter(
    (reservation: any) =>
      reservation.checkout.split("T")[0] ===
      currentDate.toISOString().split("T")[0]
  );

  const totalAdults = guestsCurrentlyInHotel.reduce(
    (acc: any, reservation: any) => acc + reservation.numberAdults,
    0
  );
  const totalKids = guestsCurrentlyInHotel.reduce(
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
        <h3>{t("heading")}</h3>
      </div>
      <div className="infoHotel">
        <div className="infos">
          <div className="infoDetail">
            <span>{t("today")}</span>
            <p>{t("checkIn")}</p>
          </div>
          <span>{todaysCheckIns.length}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>{t("today")}</span>
            <p>{t("checkOut")}</p>
          </div>
          <span>{todaysCheckOuts.length}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>{t("totalPeople")}</span>
            <p>{t("inHotel")}</p>
          </div>
          <span>{totalAdults + totalKids}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>{t("total")}</span>
            <p>{t("availableRooms")}</p>
          </div>
          <span>
            {availableRooms.length === 0 ? roomCount : availableRooms.length}
          </span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>{t("total")}</span>
            <p>{t("occupiedRooms")}</p>
          </div>
          <span>{unavailableRooms.length}</span>
        </div>
      </div>
    </StyledOverview>
  );
};
