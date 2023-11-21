import { useContext } from "react";
import { ComponentListGuest } from "../../components/componentListGuest";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { GuestMain } from "./style";
import { AppContext } from "../../context/appContext";
import { ModalUpdateGuest } from "../../components/componentModalUpdateGuest";
import { ModalRegisterGuest } from "../../components/componentModalRegisterGuest";

export const Guest = () => {
  const { modalUpdateGuest, modalCreateGuest } = useContext(AppContext);

  return (
    <GuestMain>
      {modalUpdateGuest && <ModalUpdateGuest />}
      {modalCreateGuest && <ModalRegisterGuest />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListGuest />
      </div>
    </GuestMain>
  );
};
