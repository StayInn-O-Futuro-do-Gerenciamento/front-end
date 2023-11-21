import { useState, useContext } from "react";
import { Button } from "../componentButton";
import { RoomFilteredList } from "../componentRoomList";
import { ComponentAddRoomStyle } from "./style";
import { AppContext } from "../../context/appContext";

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
      <RoomFilteredList modalName="modalUpdateRoom" />
    </ComponentAddRoomStyle>
  );
};
