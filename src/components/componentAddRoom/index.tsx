import { useState, useContext } from "react";
import { Button } from "../componentButton";
import { RoomFilteredList } from "../componentRoomList";
import { ComponentAddRoomStyle } from "./style";
import { AppContext } from "../../context/appContext";

const allRooms = [
  {
    roomNumber: "A1",
    roomType: "Básico",
    roomFloor: "1°",
    roomFacilitys: "Cama, frigobar, corda, facão",
    disponivel: "Sim",
    status: "Limpo",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "1°",
    roomFacilitys: "Cama, frigobar",
    disponivel: "Sim",
    status: "Sujo",
  },
  {
    roomNumber: "B12",
    roomType: "VIP",
    roomFloor: "2°",
    roomFacilitys:
      "Cama, frigobar, Televisão 12 polegadas, hidromassagem ,hidromassagem, hidromassagem, hidromassagem",
    disponivel: "Sim",
    status: "Em manutenção",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "2°",
    roomFacilitys: "Cama, frigobar",
    disponivel: "Sim",
    status: "Limpo",
  },
  {
    roomNumber: "D45",
    roomType: "Familia",
    roomFloor: "4°",
    roomFacilitys: "Cama, frigobar, fogão",
    disponivel: "Sim",
    status: "Sujo",
  },
];

export const ComponentAddRoom = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const { handleChangeFunction } = useContext(AppContext);
  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };
  return (
    <ComponentAddRoomStyle>
      <div>
        <div>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "allRooms" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("allRooms")}
          >
            All Room({20})
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "avaliableRoom" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("avaliableRoom")}
          >
            Avaliable Room({21})
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "booked" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("booked")}
          >
            Booked({22})
          </Button>
        </div>
        <div>
          <Button
            type="button"
            buttonVariation="buttonCreate"
            onClick={() => handleChangeFunction("modalCreateRoom", true)}
          >
            Add Room
          </Button>
        </div>
      </div>
      <RoomFilteredList rooms={allRooms} modalName="modalUpdateRoom" />
    </ComponentAddRoomStyle>
  );
};
