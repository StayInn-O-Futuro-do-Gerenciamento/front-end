import { FilterPromotion } from "../../components/componentFilterPromotion";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { ModalPromotion } from "../../components/componentModalPromotion";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { OfferMain } from "./style";
import { useContext, useEffect } from "react";
import { ModalUpdatePromotion } from "../../components/componentModalUpdatePromotion";
import { api } from "../../services/api";

export const Offer = () => {
  const { modalCretePromotion, modalUpdatePromotion, setGetOfferState } =
    useContext(AppContext);

  useEffect(() => {
    let token: string = "";
    const local = localStorage.getItem("token");
    if (local) {
      token = JSON.parse(local);
    }
    const getHospede = async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const responseOffer = await api.get(`/offer`);
      setGetOfferState(responseOffer.data);
    };
    getHospede();
  }, []);
  return (
    <OfferMain>
      {modalCretePromotion && <ModalPromotion />}
      {modalUpdatePromotion && <ModalUpdatePromotion />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <FilterPromotion />
      </div>
    </OfferMain>
  );
};
