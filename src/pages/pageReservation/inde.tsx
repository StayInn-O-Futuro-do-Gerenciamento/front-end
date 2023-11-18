import { CalendarComponent } from "../../components/componentCalendar";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { ReservationMain } from "./style";

export const Reservation = () => {
  return (
    <ReservationMain>
      <Sidebar />
      <div>
        <NavBarSearch />
        <CalendarComponent />
      </div>
    </ReservationMain>
  );
};
