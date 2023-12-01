import { Button } from "../componentButton";
import { LoadingBaseStyle, StyledFilterPromotion } from "./style";
import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { useState, useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const FilterPromotion = () => {
  const { handleChangeFunction, getOfferState, updateOfferAuto } =
    useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState("all");
  const [promotions, setPromotions] = useState<any>([]);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const userType = localStorage.getItem("userType");
  const { t, i18n } = useTranslation(["offers"]);
  const lang = i18n.language.toLowerCase();

  useEffect(() => {
    if (getOfferState) {
      const today = new Date();

      const processedPromotions = getOfferState.map((offer: any) => {
        const actualDate = new Date();
        const offerDate = new Date(offer.finishDate);
        if (offerDate < actualDate) {
          if (offer.typeRoom.length > 0) {
            updateOfferAuto({ typeRoom: null }, offer.id);
          }
        }
        const availableRoomsCount = offer.typeRoom.reduce(
          (count: any, roomType: any) => {
            const availableRooms = roomType.rooms.filter(
              (room: any) => room.available
            );
            return count + availableRooms.length;
          },
          0
        );

        const offerStartDate = new Date(offer.startDate);
        const offerFinishDate = new Date(offer.finishDate);
        let status = "";

        if (today < offerStartDate) {
          status = lang === "en" ? "Scheduled" : "Programada";
        } else if (today >= offerStartDate && today <= offerFinishDate) {
          status =
            availableRoomsCount > 0
              ? lang === "en"
                ? "Valid"
                : "Válida"
              : lang === "en"
              ? "Full"
              : "Cheio";
        } else {
          status = lang === "en" ? "Finished" : "Finalizada";
        }

        return {
          id: offer.id,
          name: offer.offerName,
          startDate: formatDate(offer.startDate),
          finishDate: formatDate(offer.finishDate),
          roomTypeName: offer.typeRoom.length > 0 ? offer.typeRoom[0].name : "",
          availableRoomsCount: availableRoomsCount,
          trueRoomStatusesCount: status,
        };
      });

      setPromotions(processedPromotions);
    }
  }, [getOfferState, lang]);

  const filteredPromotions = useMemo(() => {
    setCurrentPage(1);
    if (selectedButton === "all") {
      return promotions;
    }

    return promotions.filter((promotion: any) => {
      if (selectedButton === "ongoing") {
        return (
          promotion.trueRoomStatusesCount === "Válida" ||
          promotion.trueRoomStatusesCount === "Valid"
        );
      } else if (selectedButton === "finished") {
        return (
          promotion.trueRoomStatusesCount === "Finalizada" ||
          promotion.trueRoomStatusesCount === "Finished"
        );
      } else if (selectedButton === "full") {
        return (
          promotion.trueRoomStatusesCount === "Cheio" ||
          promotion.trueRoomStatusesCount === "Full"
        );
      } else if (selectedButton === "scheduled") {
        return (
          promotion.trueRoomStatusesCount === "Programada" ||
          promotion.trueRoomStatusesCount === "Scheduled"
        );
      } else {
        return true;
      }
    });
  }, [selectedButton, promotions]);

  if (!getOfferState) {
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

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === "en" ? "en" : "pt-BR");
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = filteredPromotions.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );
  let totalPages = Math.ceil(filteredPromotions.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <StyledFilterPromotion>
      <div className="containerContent">
        <div className="buttonContainer">
          <Button
            className={selectedButton === "all" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("all")}
          >
            {t("all")}
          </Button>
          <Button
            className={selectedButton === "ongoing" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("ongoing")}
          >
            {t("ongoing")}
          </Button>
          <Button
            className={selectedButton === "finished" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("finished")}
          >
            {t("finished")}
          </Button>
          <Button
            className={selectedButton === "full" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("full")}
          >
            {t("full")}
          </Button>
          <Button
            className={selectedButton === "scheduled" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("scheduled")}
          >
            {t("scheduled")}
          </Button>
        </div>
        {JSON.parse(userType!) !== "Attendant" && (
          <Button
            type="button"
            buttonVariation="buttonCreate"
            onClick={() => handleChangeFunction("modalCreatePromotion", true)}
            className="offer"
          >
            {t("addPromotion")}
          </Button>
        )}
      </div>
      <TableStyled>
        <thead>
          <tr>
            <th> {t("name")} </th>
            <th> {t("startDate")} </th>
            <th> {t("finishDate")} </th>
            <th> {t("roomType")} </th>
            <th> {t("availableRooms")} </th>
            <th> {t("status")} </th>
            <th></th>
          </tr>
        </thead>
        <ComponentTableList
          list={currentRooms}
          modalName="modalUpdatePromotion"
          typeList="offerId"
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
    </StyledFilterPromotion>
  );
};
