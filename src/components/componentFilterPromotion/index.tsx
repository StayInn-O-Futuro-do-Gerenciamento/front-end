import { Button } from "../componentButton";
import { LoadingBaseStyle, StyledFilterPromotion } from "./style";
import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { useState, useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";

export const FilterPromotion = () => {
  const { handleChangeFunction, getOfferState, updateOfferAuto } =
    useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState("all");
  const [promotions, setPromotions] = useState<any>([]);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const userType = localStorage.getItem("userType");

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
          status = "Programada";
        } else if (today >= offerStartDate && today <= offerFinishDate) {
          status = availableRoomsCount > 0 ? "Válida" : "Cheio";
        } else {
          status = "Finalizada";
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
  }, [getOfferState]);

  const filteredPromotions = useMemo(() => {
    setCurrentPage(1);
    if (selectedButton === "all") {
      return promotions;
    }

    return promotions.filter((promotion: any) => {
      if (selectedButton === "ongoing") {
        return promotion.trueRoomStatusesCount === "Válida";
      } else if (selectedButton === "finished") {
        return promotion.trueRoomStatusesCount === "Finalizada";
      } else if (selectedButton === "full") {
        return promotion.trueRoomStatusesCount === "Cheio";
      } else if (selectedButton === "scheduled") {
        return promotion.trueRoomStatusesCount === "Programada";
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
          color={" #f9a63a"}
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
    return date.toLocaleDateString("pt-BR");
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
            Todas
          </Button>
          <Button
            className={selectedButton === "ongoing" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("ongoing")}
          >
            Em andamento
          </Button>
          <Button
            className={selectedButton === "finished" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("finished")}
          >
            Finalizadas
          </Button>
          <Button
            className={selectedButton === "full" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("full")}
          >
            Cheio
          </Button>
          <Button
            className={selectedButton === "scheduled" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("scheduled")}
          >
            Programadas
          </Button>
        </div>
        {JSON.parse(userType!) !== "Attendant" && (
          <Button
            type="button"
            buttonVariation="buttonCreate"
            onClick={() => handleChangeFunction("modalCreatePromotion", true)}
            className="offer"
          >
            Adicionar oferta
          </Button>
        )}
      </div>
      <TableStyled>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de inicio</th>
            <th>Data final</th>
            <th>Tipo do Quarto</th>
            <th>Quartos disponiveis</th>
            <th>Status</th>
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
