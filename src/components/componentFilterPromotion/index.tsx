import { Button } from "../componentButton";
import { StyledFilterPromotion } from "./style";
import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { useState, useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../context/appContext";

export const FilterPromotion = () => {
  const [selectedButton, setSelectedButton] = useState("all");
  const { handleChangeFunction, getOfferState } = useContext(AppContext);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  const [promotions, setPromotions] = useState([]);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  useEffect(() => {
    if (getOfferState) {
      const today = new Date();

      const processedPromotions = getOfferState.map((offer: any) => {
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
          roomTypeName: offer.typeRoom[0].name,
          availableRoomsCount: availableRoomsCount,
          trueRoomStatusesCount: status,
        };
      });

      setPromotions(processedPromotions);
    }
  }, [getOfferState]);

  const filteredPromotions = useMemo(() => {
    if (selectedButton === "all") {
      return promotions;
    }

    return promotions.filter((promotion) => {
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
        <Button
          type="button"
          buttonVariation="buttonCreate"
          onClick={() => handleChangeFunction("modalCreatePromotion", true)}
        >
          Adicionar oferta
        </Button>
      </div>
      <TableStyled>
        <thead>
          <th>ID da oferta</th>
          <th>Nome</th>
          <th>Data de inicio</th>
          <th>Data final</th>
          <th>Tipo do Quarto</th>
          <th>Quartos disponiveis</th>
          <th>Status</th>
          <th></th>
        </thead>
        <ComponentTableList
          list={filteredPromotions}
          modalName="modalUpdatePromotion"
        />
      </TableStyled>
    </StyledFilterPromotion>
  );
};
