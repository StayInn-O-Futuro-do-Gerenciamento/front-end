import { useContext } from "react";
import { CalendarComponent } from "../../components/componentCalendar";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { ReservationMain } from "./style";
import { AppContext } from "../../context/appContext";
import { FilterReservation } from "../../components/componentFilterResevation";
import { RoomFilteredList } from "../../components/componentRoomList";

export const Reservation = () => {
  const { createReservation } = useContext(AppContext);

  return (
    <ReservationMain>
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
          <RoomFilteredList />
        </div>
      )}
    </ReservationMain>
  );
};
