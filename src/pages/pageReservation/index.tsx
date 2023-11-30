import { useContext, useEffect, useState } from "react";
import { CalendarComponent } from "../../components/componentCalendar";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { LoadingBaseStyle, ReservationMain } from "./style";
import { AppContext } from "../../context/appContext";
import { FilterReservation } from "../../components/componentFilterResevation";
import { RoomFilteredList } from "../../components/componentRoomList";
import { ModalUpdateTypeRoom } from "../../components/componentModalUpdateTypeRoom";
import { ModalScheduleReservation } from "../../components/componetModalScheduleReservation";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import { api } from "../../services/api";
import ReactLoading from "react-loading";

export const Reservation = () => {
  const {
    createReservation,
    modalUpdateTypeRoom,
    modalScheduleReservation,
    getRoomState,
    getTypeRoomSearchState,
    setGetReservationState,
  } = useContext(AppContext);

  const roomsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const maxVisibleButtons = 3;
  const userType = localStorage.getItem("userType");
  useEffect(() => {
    setCurrentPage(1);
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }
    const getReserva = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const resposeReservation = await api.get(`/reservation`);
      setGetReservationState(resposeReservation.data);
    };
    getReserva();
  }, [getTypeRoomSearchState]);

  if (!getRoomState) {
    return (
      <ReservationMain>
        <Sidebar />
        <div className="mainContet">
          <NavBarSearch />
          <LoadingBaseStyle>
            <ReactLoading
              type={"spinningBubbles"}
              color={" #f9a63a"}
              height={233}
              width={150}
            />
          </LoadingBaseStyle>
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

  const maxPagesToLeft = Math.floor(maxVisibleButtons / 2);
  const maxPagesToRight = Math.ceil(maxVisibleButtons / 2);
  const startPage = Math.max(1, currentPage - maxPagesToLeft);
  const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

  const pageButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <ReservationMain>
      {modalUpdateTypeRoom && <ModalUpdateTypeRoom />}
      {JSON.parse(userType!) === "Attendant" && modalScheduleReservation && (
        <ModalScheduleReservation />
      )}
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
          <div className="pageDiv">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <img src={Left} alt="" />
            </button>
            <ul className="pagination">
              {pageButtons.map((page, index) => (
                <li
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <img src={Right} alt="" />
            </button>
          </div>
        </div>
      )}
    </ReservationMain>
  );
};
