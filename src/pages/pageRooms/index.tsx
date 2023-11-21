import { ComponentAddRoom } from "../../components/componentAddRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { RoomMain } from "./style";

export const Rooms = () => {
  return (
    <RoomMain>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentAddRoom />
      </div>
    </RoomMain>
  );
};
