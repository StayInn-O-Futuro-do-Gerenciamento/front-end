import { ComponentTableList } from "../componentTableList";
import { TableStyled } from "../../style/tableStyle";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";
import { ComponentListReservationStyle, LoadingBaseStyle } from "./style";
import moment from "moment";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const ComponentListReservation = () => {
  const { getReservationState, deleteReservation } = useContext(AppContext);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation(["reservationList"]);
  const lang = i18n.language.toLowerCase();

  if (!getReservationState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"spinningBubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  const reservationData = getReservationState.map((reservation: any) => {
    const isEnglish = lang === "en";
    const actualDate = new Date();
    const reservationCheckout = new Date(reservation.checkout);

    if (reservationCheckout < actualDate) {
      if (reservation.id === reservation.id) {
        deleteReservation(reservation.id);
      } else {
        toast.error("Erro ao deletar a reserva!");
      }
    }
    const peopleCount =
      Number(reservation.numberAdults) + Number(reservation.numberKids);
    moment.locale(isEnglish ? "en" : "pt-br");
    const formattedCheckin = moment(reservation.checkin).format(
      isEnglish ? "MMMM DD, YYYY" : "DD [de] MMMM [de] YYYY"
    );
    const formattedCheckout = moment(reservation.checkout).format(
      isEnglish ? "MMMM DD, YYYY" : "DD [de] MMMM [de] YYYY"
    );
    const guest = reservation.guests[0].name;

    const adjustFloorKey = (floor: any) => {
      if (isEnglish) {
        return `Floor ${floor.split(" ")[1]}`;
      }

      return floor;
    };
    return {
      id: reservation.id,
      guest: guest,
      checkin: formattedCheckin,
      checkout: formattedCheckout,
      peopleQuantity: peopleCount,
      room: reservation.rooms.roomNumber,
      floor: adjustFloorKey(reservation.rooms.floor),
      price: isEnglish
        ? `$ ${Number(reservation.rooms.typeRoom.price).toFixed(2)}`
        : `R$ ${Number(reservation.rooms.typeRoom.price).toFixed(2)}`,
      feedBack: reservation.feedBack,
    };
  });

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = reservationData.slice(indexOfFirstRoom, indexOfLastRoom);
  let totalPages = Math.ceil(reservationData.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <ComponentListReservationStyle>
      <div></div>
      <TableStyled>
        <thead>
          <th>{t("guest")}</th>
          <th>{t("checkin")}</th>
          <th>{t("checkout")}</th>
          <th>{t("peopleQuantity")}</th>
          <th>{t("room")}</th>
          <th>{t("floor")}</th>
          <th>{t("price")}</th>
          <th>{t("feedBack")}</th>
          <th></th>
        </thead>
        <ComponentTableList
          list={currentRooms}
          modalName="updateReservation"
          typeList="reservationId"
        />
      </TableStyled>
      <ul className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={Left} alt="" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={Right} alt="" />
        </button>
      </ul>
    </ComponentListReservationStyle>
  );
};
