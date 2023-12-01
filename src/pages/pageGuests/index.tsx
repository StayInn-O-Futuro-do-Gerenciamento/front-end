import { useContext, useEffect } from "react";
import { ComponentListGuest } from "../../components/componentListGuest";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { GuestMain } from "./style";
import { AppContext } from "../../context/appContext";
import { ModalUpdateGuest } from "../../components/componentModalUpdateGuest";
import { ModalRegisterGuest } from "../../components/componentModalRegisterGuest";
import { api } from "../../services/api";
import { useTranslation } from "react-i18next";

export const Guest = () => {
  const { modalUpdateGuest, modalCreateGuest, setGetGuestState } =
    useContext(AppContext);
  const userType = localStorage.getItem("userType");
  const { i18n } = useTranslation(["offers"]);
  const lang = i18n.language.toLowerCase();
  useEffect(() => {
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }
    const getHospede = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const responseGuest = await api.get(`/guest?pageSize=1000`);
      setGetGuestState(responseGuest.data);
    };
    getHospede();
  }, [lang]);
  return (
    <GuestMain>
      {JSON.parse(userType!) === "Attendant" && modalUpdateGuest && (
        <ModalUpdateGuest />
      )}
      {modalCreateGuest && <ModalRegisterGuest />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListGuest />
      </div>
    </GuestMain>
  );
};
