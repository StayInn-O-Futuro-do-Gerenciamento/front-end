import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { api } from "../../services/api";
import { useEffect, useContext } from "react";
import { ReservationListMain } from "./style";
import { ComponentListReservation } from "../../components/componentReservationList";
import { ModalUpdateReservation } from "../../components/componentModalUpdateReservation";

export const ReservationList = () => {
  const { modalUpdateReservation, setGetReservationState } =
    useContext(AppContext);
  useEffect(() => {
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }

    const getHospede = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const responseTypeRoom = await api.get(`/reservation`);
      setGetReservationState(responseTypeRoom.data);
    };
    getHospede();
  }, []);
  return (
    <ReservationListMain>
      {modalUpdateReservation && <ModalUpdateReservation />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListReservation />
      </div>
    </ReservationListMain>
  );
};
