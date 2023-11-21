import { useContext } from "react";
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
  const { createReservation, modalUpdateTypeRoom, modalScheduleReservation } =
    useContext(AppContext);

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
          <RoomFilteredList modalName="modalScheduleReservation" />
        </div>
      )}
    </ReservationMain>
  );
};
