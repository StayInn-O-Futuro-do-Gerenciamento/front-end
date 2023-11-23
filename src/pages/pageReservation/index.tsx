import { useContext, useState } from "react";
import { CalendarComponent } from "../../components/componentCalendar";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { ReservationMain } from "./style";
import { AppContext } from "../../context/appContext";
import { FilterReservation } from "../../components/componentFilterResevation";
import { RoomFilteredList } from "../../components/componentRoomList";
import { ModalUpdateTypeRoom } from "../../components/componentModalUpdateTypeRoom";
import { ModalScheduleReservation } from "../../components/componetModalScheduleReservation";

export const Reservation = () => {
  const {
    createReservation,
    modalUpdateTypeRoom,
    modalScheduleReservation,
    getRoomState,
    getTypeRoomSearchState,
    getRoomId,
  } = useContext(AppContext);

  const roomsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  if (!getRoomState) {
    return (
      <ReservationMain>
        <Sidebar />
        <div className="mainContet">
          <NavBarSearch />
          <h3>Loading...</h3>
        </div>
      </ReservationMain>
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

  let filteredRooms = formattedDataArray;
  if (getTypeRoomSearchState) {
    filteredRooms = formattedDataArray.filter((room: any) => {
      const { roomType, disponivel, personCount } = room;
      const {
        typeRoom: filterTypeRoom,
        numberAdults,
        numberChildrens,
      } = getTypeRoomSearchState;

      if (filterTypeRoom === "all") {
        return true;
      }

      if (
        filterTypeRoom &&
        roomType &&
        roomType.toLowerCase() !== filterTypeRoom.toLowerCase()
      ) {
        return false;
      }

      if (disponivel !== "Sim") {
        return false;
      }

      const totalPersons = numberAdults + numberChildrens;
      if (totalPersons && totalPersons > personCount) {
        return false;
      }

      return true;
    });
  }

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <ReservationMain>
      {modalUpdateTypeRoom && <ModalUpdateTypeRoom />}
      {modalScheduleReservation && <ModalScheduleReservation />}
      <Sidebar />
      {!createReservation && (
        <div className="mainContet">
          <NavBarSearch />
          <CalendarComponent />
        </div>
      )}
      {createReservation && (
        <div className="mainContet">
          <NavBarSearch />
          <FilterReservation />
          <RoomFilteredList
            rooms={currentRooms}
            modalName="modalScheduleReservation"
          />
          <div>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </ReservationMain>
  );
};
