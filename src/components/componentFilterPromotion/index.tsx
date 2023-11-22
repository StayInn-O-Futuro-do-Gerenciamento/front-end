import { Button } from "../componentButton";
import { StyledFilterPromotion } from "./style";
import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";

export const FilterPromotion = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const { handleChangeFunction } = useContext(AppContext);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  // const [gestAll, setGestAll] = useState<any>([]); // Use state para armazenar os dados

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!getGuestState) {
  //       return;
  //     }

  //     const promises = getGuestState.map(async (element: any) => {
  //       let price = await getFrankstainHistoryPrice(element.id);

  //       return {
  //         name: element.name,
  //         nacionalidade: element.nationality,
  //         rg: element.rg,
  //         number: element.phoneNumbers[0],
  //         totalPago: price,
  //       };
  //     });

  //     // Aguarda todas as solicitações assíncronas
  //     const guestData = await Promise.all(promises);
  //     setGestAll(guestData); // Atualiza o estado com os dados obtidos
  //   };

  //   fetchData();
  // }, [getGuestState, getFrankstainHistoryPrice]);

  const promotions = [
    {
      roomNumber: "A1",
      roomType: "Black Friday",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar, corda, facão",
      status: "VIP",
      Quantidade: 5,
      avaliabity: "Novo",
    },
    {
      roomNumber: "A2",
      roomType: "Aniversariante",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar",
      status: "Básico",
      Quantidade: 5,
      avaliabity: "Cheio",
    },
    {
      roomNumber: "B12",
      roomType: "VIP",
      roomFloor: "2°",
      roomFacilitys: "Cama, frigobar, Televisão 12 polegadas, hidromassagem",
      status: "900",
      Quantidade: 5,
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "A2",
      roomType: "Básico",
      roomFloor: "2°",
      roomFacilitys: "Cama, frigobar",
      status: "700",
      Quantidade: 5,
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "D45",
      roomType: "Familia",
      roomFloor: "4°",
      roomFacilitys: "Cama, frigobar, fogão",
      status: "800",
      Quantidade: 5,
      avaliabity: "Finalizado",
    },
  ];

  return (
    <StyledFilterPromotion>
      <div className="containerContent">
        <div className="buttonContainer">
          <Button
            className={selectedButton === "continue" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("continue")}
          >
            Continua
          </Button>
          <Button
            className={selectedButton === "finishi" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("finishi")}
          >
            FInalizada
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
            className={selectedButton === "inactive" ? "selected-btn" : ""}
            type="button"
            buttonVariation="filterButton"
            onClick={() => handleButtonClick("inactive")}
          >
            Inativo
          </Button>
          {/* <Button type="button" buttonVariation="filterButton">
            Disponível
          </Button> */}
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
          list={promotions}
          modalName="modalUpdatePromotion"
        />
      </TableStyled>
    </StyledFilterPromotion>
  );
};
