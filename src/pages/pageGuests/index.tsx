import { ComponentListGuest } from "../../components/componentListGuest";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { GuestMain } from "./style";

export const Guest = () => {
  return (
    <GuestMain>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListGuest />
      </div>
    </GuestMain>
  );
};
