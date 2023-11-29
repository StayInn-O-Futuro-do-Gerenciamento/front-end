import { useContext, useEffect } from "react";
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
import { AppContext } from "../../context/appContext";
import { api } from "../../services/api";

export const Dashboard = () => {
  const {
    setGetTypeRoomState,
    setGetReservationState,
    setGetRoomState,
    setGetGuestState,
    setGetHistoryState,
    setGetOfferState,
    getOfferState,
    updateOfferAuto,
  } = useContext(AppContext);

  useEffect(() => {
    const getOverview = async () => {
      let token: string = "";
      const local = localStorage.getItem("token");
      if (local) {
        token = JSON.parse(local);
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const resposeReservation = await api.get(`/reservation`);
      setGetReservationState(resposeReservation.data);

      const responseRoom = await api.get(`/room?pageSize=1000`);
      setGetRoomState(responseRoom.data);

      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);

      const responseGuest = await api.get(`/guest?pageSize=1000`);
      setGetGuestState(responseGuest.data);

      const responseHistory = await api.get(`/history`);
      setGetHistoryState(responseHistory.data);

      const responseOffer = await api.get(`/offer`);
      setGetOfferState(responseOffer.data);
      if (getOfferState) {
        getOfferState.forEach((offer: any) => {
          const actualDate = new Date();
          const offerDate = new Date(offer.finishDate);
          if (offerDate < actualDate) {
            if (offer.typeRoom.length > 0) {
              updateOfferAuto({ typeRoom: null }, offer.id);
            }
          }
        });
      }
    };

    getOverview();
  }, []);

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
