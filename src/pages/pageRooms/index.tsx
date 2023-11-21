import { useContext } from "react";
import { ComponentAddRoom } from "../../components/componentAddRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { RoomMain } from "./style";
import { AppContext } from "../../context/appContext";
import { ModalUpdateRoom } from "../../components/componentModalUpdateRoom";

export const Rooms = () => {
  const { modalUpdateRoom } = useContext(AppContext);

  return (
    <RoomMain>
      {modalUpdateRoom && <ModalUpdateRoom />}

      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentAddRoom />
      </div>
    </RoomMain>
  );
};
