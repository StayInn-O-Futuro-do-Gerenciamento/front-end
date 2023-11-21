import { ComponentListRateRoom } from "../../components/componentListRateRoom";
import { ModalUpdateTypeRoom } from "../../components/componentModalUpdateTypeRoom";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { AppContext } from "../../context/appContext";
import { RateMain } from "./style";
import { useContext } from "react";

export const Rate = () => {
  const { modalUpdateTypeRoom } = useContext(AppContext);

  return (
    <RateMain>
      {modalUpdateTypeRoom && <ModalUpdateTypeRoom />}
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <ComponentListRateRoom />
      </div>
    </RateMain>
  );
};
