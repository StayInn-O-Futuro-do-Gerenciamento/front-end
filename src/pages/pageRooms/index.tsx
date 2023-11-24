import { useContext, useEffect } from "react";
import { ComponentAddRoom } from "../../components/componentAddRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { RoomMain } from "./style";
import { AppContext } from "../../context/appContext";
import { ModalUpdateRoom } from "../../components/componentModalUpdateRoom";
import { ModalAddRoom } from "../../components/componentModalAddRoom";
import { api } from "../../services/api";

export const Rooms = () => {
  const { modalUpdateRoom, modalCreateRoom, setGetRoomState } =
    useContext(AppContext);

  useEffect(() => {
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }
    const getHospede = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const responseRoom = await api.get(`/room?pageSize=1000`);
      setGetRoomState(responseRoom.data);
    };
    getHospede();
  }, []);

  return (
    <RoomMain>
      {modalUpdateRoom && <ModalUpdateRoom />}
      {modalCreateRoom && <ModalAddRoom />}

      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentAddRoom />
      </div>
    </RoomMain>
  );
};
