import { ComponentListRateRoom } from "../../components/componentListRateRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { RateMain } from "./style";

export const Rate = () => {
  return (
    <RateMain>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListRateRoom />
      </div>
    </RateMain>
  );
};
