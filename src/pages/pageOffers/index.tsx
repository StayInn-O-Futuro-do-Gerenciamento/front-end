import { FilterPromotion } from "../../components/componentFilterPromotion";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { ModalPromotion } from "../../components/componentPromotionModal";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { OfferMain } from "./style";
import { useContext } from "react";

export const Offer = () => {
  const { modalCretePromotion } = useContext(AppContext);

  return (
    <OfferMain>
      {modalCretePromotion && <ModalPromotion />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <FilterPromotion />
      </div>
    </OfferMain>
  );
};
