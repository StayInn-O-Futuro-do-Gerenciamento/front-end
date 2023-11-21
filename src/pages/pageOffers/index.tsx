import { FilterPromotion } from "../../components/componentFilterPromotion";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { OfferMain } from "./style";

export const Offer = () => {
  return (
    <OfferMain>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <FilterPromotion />
      </div>
    </OfferMain>
  );
};
