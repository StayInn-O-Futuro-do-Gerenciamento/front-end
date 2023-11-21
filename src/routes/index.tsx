import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/pageDashboard";
import { Reservation } from "../pages/pageReservation/inde";
import { Guest } from "../pages/pageGuests";
import { Rate } from "../pages/pageRates";
import { Rooms } from "../pages/pageRooms";
import { Offer } from "../pages/pageOffers";
import { AppContext } from "../context/appContext";
import { useContext } from "react";
import { PageLogin } from "../pages/pageLogin";
import { PageRegister } from "../pages/pageRegister";

export const RoutesMain = () => {
  const { modalRegisterAttedant } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/guests" element={<Guest />} />
      <Route path="/offers" element={<Offer />} />
      <Route path="/rates" element={<Rate />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
    </Routes>
  );
};
