import { Button } from "../componentButton";
import { StyledFilterPromotion } from "./style";
import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { useState, useContext } from "react";
import { AppContext } from "../../context/appContext";

export const FilterPromotion = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const { handleChangeFunction } = useContext(AppContext);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };
  const promotions = [
    {
      roomNumber: "A1",
      roomType: "Black Friday",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar, corda, facão",
      status: "VIP",
      avaliabity: "Novo",
    },
    {
      roomNumber: "A2",
      roomType: "Aniversariante",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar",
      status: "Básico",
      avaliabity: "Cheio",
    },
    {
      roomNumber: "B12",
      roomType: "VIP",
      roomFloor: "2°",
      roomFacilitys:
        "Cama, frigobar, Televisão 12 polegadas, hidromassagem ,hidromassagem, hidromassagem, hidromassagem",
      status: "900",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "A2",
      roomType: "Básico",
      roomFloor: "2°",
      roomFacilitys: "Cama, frigobar",
      status: "700",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "D45",
      roomType: "Familia",
      roomFloor: "4°",
      roomFacilitys: "Cama, frigobar, fogão",
      status: "800",
      avaliabity: "5 roomss",
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
          <th>Referencia da oferta</th>
          <th>Nome</th>
          <th>Reservas restantes</th>
          <th>Data final</th>
          <th>Tipo</th>
          <th>Status</th>
          <th></th>
        </thead>
        <ComponentTableList list={promotions} />
      </TableStyled>
    </StyledFilterPromotion>
  );
};
