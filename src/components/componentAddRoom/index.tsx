import { useState, useContext } from "react";
import { Button } from "../componentButton";
import { RoomFilteredList } from "../componentRoomList";
import { ComponentAddRoomStyle, LoadingBaseStyle } from "./style";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";

export const ComponentAddRoom = () => {
  const [selectedButton, setSelectedButton] = useState("allRooms");
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { handleChangeFunction, getRoomState } = useContext(AppContext);
  const handleButtonClick = (buttonId: string) => {
    setCurrentPage(1);
    setSelectedButton(buttonId);
  };
  const userType = localStorage.getItem("userType");

  if (!getRoomState) {
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

  const formattedDataArray = getRoomState.map((room: any) => ({
    id: room.id,
    roomNumber: room.roomNumber,
    roomType: room.typeRoom.name,
    roomFloor: room.floor,
    roomFacilitys: room.typeRoom.confort,
    disponivel: room.available ? "Sim" : "Não",
    personCount: room.typeRoom.personCount,
    status: room.status,
  }));

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = formattedDataArray.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );

  let totalPages = Math.ceil(formattedDataArray.length / roomsPerPage);

  if (selectedButton === "availableRoom") {
    let availabe = formattedDataArray.filter(
      (room) => room.disponivel === "Sim"
    );
    currentRooms = availabe.slice(indexOfFirstRoom, indexOfLastRoom);
    totalPages = Math.ceil(availabe.length / roomsPerPage);
  } else if (selectedButton === "booked") {
    let unavailable = formattedDataArray.filter(
      (room) => room.disponivel === "Não"
    );
    currentRooms = unavailable.slice(indexOfFirstRoom, indexOfLastRoom);
    totalPages = Math.ceil(unavailable.length / roomsPerPage);
  } else {
    currentRooms = formattedDataArray.slice(indexOfFirstRoom, indexOfLastRoom);
    totalPages = Math.ceil(formattedDataArray.length / roomsPerPage);
  }

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <ComponentAddRoomStyle>
      <div>
        <div className="buttons">
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "allRooms" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("allRooms")}
          >
            Todas os Quartos({formattedDataArray.length})
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "availableRoom" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("availableRoom")}
          >
            Quartos disponiveis(
            {
              formattedDataArray.filter((room) => room.disponivel === "Sim")
                .length
            }
            )
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "booked" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("booked")}
          >
            Quatos Reservados(
            {
              formattedDataArray.filter((room) => room.disponivel === "Não")
                .length
            }
            )
          </Button>
        </div>
        {JSON.parse(userType!) !== "Attendant" && (
          <div className="buttonadd">
            <Button
              type="button"
              buttonVariation="buttonCreate"
              onClick={() => handleChangeFunction("modalCreateRoom", true)}
            >
              Adicionar Quartos
            </Button>
          </div>
        )}
      </div>
      <RoomFilteredList rooms={currentRooms} modalName="modalUpdateRoom" />

      <div className="pageDiv">
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
      </div>
    </ComponentAddRoomStyle>
  );
};
