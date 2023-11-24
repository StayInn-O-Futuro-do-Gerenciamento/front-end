import { ComponentListRateRoom } from "../../components/componentListRateRoom";
import { ModalUpdateTypeRoom } from "../../components/componentModalUpdateTypeRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { api } from "../../services/api";
import { RateMain } from "./style";
import { useContext, useEffect } from "react";

export const Rate = () => {
  const { modalUpdateTypeRoom, setGetTypeRoomState } = useContext(AppContext);
  useEffect(() => {
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }

    const getHospede = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);
    };
    getHospede();
  }, []);
  return (
    <RateMain>
      {modalUpdateTypeRoom && <ModalUpdateTypeRoom />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListRateRoom />
      </div>
    </RateMain>
  );
};
