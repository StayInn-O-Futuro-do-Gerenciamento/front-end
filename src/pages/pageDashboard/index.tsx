import { BarChart } from "../../components/componentChartMain";
import { ReservationBar } from "../../components/componentCreateReservationBar";
import { Feedback } from "../../components/componentFeedBack";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Room } from "../../components/componentRoom";
import { SemiCircularChart } from "../../components/componentSemiCircularChart";
import { Sidebar } from "../../components/componentSidebar";
import { StatusRoom } from "../../components/componentStatusRoom";
import { Overview } from "../../components/componenteOverview";
import { StyledContainerDashboard } from "./style";

export const Dashboard = () => {
  return (
    <StyledContainerDashboard>
      <Sidebar />
      <div className="containerMain">
        <NavBarSearch />
        <ReservationBar />
        <div className="contentDashBoard">
          <Overview />
          <div className="infoRoomStatus">
            <Room />
            <StatusRoom />
          </div>
          <div className="informationChart">
            <BarChart />
            <div className="containerInfo">
              <SemiCircularChart />
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </StyledContainerDashboard>
  );
};
