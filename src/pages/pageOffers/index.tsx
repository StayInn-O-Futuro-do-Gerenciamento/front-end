import { FilterPromotion } from "../../components/componentFilterPromotion";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { ModalPromotion } from "../../components/componentModalPromotion";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { OfferMain } from "./style";
import { useContext } from "react";
import { ModalUpdatePromotion } from "../../components/componentModalUpdatePromotion";

export const Offer = () => {
  const { modalCretePromotion, modalUpdatePromotion } = useContext(AppContext);

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
