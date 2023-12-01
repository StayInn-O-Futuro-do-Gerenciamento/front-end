import { ComponentTableList } from "../componentTableList";
import { TableStyled } from "../../style/tableStyle";
import { ComponentListRateRoomStyle, LoadingBaseStyle } from "./style";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const ComponentListRateRoom = () => {
  const { getTypeRoomState } = useContext(AppContext);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation(["typeRooms"]);
  const lang = i18n.language.toLowerCase();

  if (!getTypeRoomState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"spinningBubbles"}
          color={"var(--orange-400)"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  const extractedData = getTypeRoomState
    ? getTypeRoomState.map((roomType: any) => {
        const isEnglish = lang === "en";
        const availableRoomsCount = roomType.rooms.filter(
          (room: any) => room.available
        ).length;

        let totalPrice = parseFloat(roomType.price);

        if (roomType.offer && roomType.offer.discount) {
          const discount = parseFloat(roomType.offer.discount);
          if (!isNaN(discount)) {
            totalPrice -= (totalPrice * discount) / 100;
          }
        }
        const mapStatusToEnglish = (status: string) => {
          const statusMap: any = {
            Flexível: "Flexible",
            Restrito: "Restricted",
            "Sem Reembolso": "No Refund",
          };
          const spanishTranslation: any = {
            Flexível: "Flexible",
            Restrito: "Restringido",
            "Sem Reembolso": "Sin reembolso",
          };

          if (lang === "en") {
            return statusMap[status] || status;
          } else if (lang === "es") {
            return spanishTranslation[status] || status;
          } else {
            return status;
          }
        };

        return {
          id: roomType.id,
          name: roomType.name,
          offerName: roomType.offer ? roomType.offer.offerName : null,
          rate: mapStatusToEnglish(roomType.rate),
          description: roomType.description,
          price: isEnglish ? `$ ${roomType.price}` : `R$ ${roomType.price}`,
          discount:
            roomType.offer && roomType.offer.discount
              ? `${roomType.offer.discount}%`
              : null,
          totalPriceToPay: isEnglish ? `$ ${totalPrice}` : `R$ ${totalPrice}`,
          roomTypeQuantity: roomType.roomTypeQuantity,
          availableRoomsCount: availableRoomsCount,
        };
      })
    : [];

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = extractedData.slice(indexOfFirstRoom, indexOfLastRoom);
  let totalPages = Math.ceil(extractedData.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <ComponentListRateRoomStyle>
      <div></div>
      <TableStyled>
        <thead>
          <th>{t("roomType")}</th>
          <th>{t("offer")}</th>
          <th>{t("cancellationPolicy")}</th>
          <th>{t("description")}</th>
          <th>{t("roomPrice")}</th>
          <th>{t("offerDiscount")}</th>
          <th>{t("totalToPay")}</th>
          <th>{t("totalRooms")}</th>
          <th>{t("availableRooms")}</th>
          <th></th>
        </thead>
        <ComponentTableList
          list={currentRooms}
          modalName="modalUpdateTypeRoom"
          typeList="typeRoomId"
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
    </ComponentListRateRoomStyle>
  );
};
