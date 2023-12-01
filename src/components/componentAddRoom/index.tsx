import { useState, useContext } from "react";
import { Button } from "../componentButton";
import { RoomFilteredList } from "../componentRoomList";
import { ComponentAddRoomStyle, LoadingBaseStyle } from "./style";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation(["componentAddRoom"]);
  const lang = i18n.language.toLowerCase();

  if (!getRoomState) {
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
  const formattedDataArray = getRoomState.map((room: any) => {
    const isEnglish = lang === "en";

    const mapStatusToEnglish = (status: string) => {
      const statusMap: any = {
        Limpo: "Clean",
        Sujo: "Dirty",
        "Em Manutenção": "Under Maintenance",
      };

      return statusMap[status] || status;
    };
    const adjustFloorKey = (floor: any) => {
      if (isEnglish) {
        return `Floor ${floor.split(" ")[1]}`;
      }

      return floor;
    };

    return {
      id: room.id,
      roomNumber: room.roomNumber,
      roomType: room.typeRoom.name,
      roomFloor: adjustFloorKey(room.floor),
      roomFacilitys: room.typeRoom.confort,
      disponivel: isEnglish
        ? room.available
          ? "Yes"
          : "No"
        : room.available
        ? "Sim"
        : "Não",
      personCount: room.typeRoom.personCount,
      status: isEnglish ? mapStatusToEnglish(room.status) : room.status,
    };
  });

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = formattedDataArray.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );

  let totalPages = Math.ceil(formattedDataArray.length / roomsPerPage);

  if (selectedButton === "availableRoom") {
    let availabe = formattedDataArray.filter(
      (room: any) => room.disponivel === "Sim" || room.disponivel === "Yes"
    );
    currentRooms = availabe.slice(indexOfFirstRoom, indexOfLastRoom);
    totalPages = Math.ceil(availabe.length / roomsPerPage);
  } else if (selectedButton === "booked") {
    let unavailable = formattedDataArray.filter(
      (room: any) => room.disponivel === "Não" || room.disponivel === "No"
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
            {t("allRoomsButton")}({formattedDataArray.length})
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "availableRoom" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("availableRoom")}
          >
            {t("availableRoomsButton")}(
            {
              formattedDataArray.filter(
                (room: any) =>
                  room.disponivel === "Sim" || room.disponivel === "Yes"
              ).length
            }
            )
          </Button>
          <Button
            type="button"
            buttonVariation="filterButton"
            className={selectedButton === "booked" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("booked")}
          >
            {t("bookedRoomsButton")}(
            {
              formattedDataArray.filter(
                (room: any) =>
                  room.disponivel === "Não" || room.disponivel === "No"
              ).length
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
              {t("addRoomsButton")}
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
