import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/pageDashboard";
import { Reservation } from "../pages/pageReservation/inde";
import { Guest } from "../pages/pageGuests";
import { Rate } from "../pages/pageRates";
import { Rooms } from "../pages/pageRooms";
import { Offer } from "../pages/pageOffers";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/guests" element={<Guest />} />
      <Route path="/offers" element={<Offer />} />
      <Route path="/rates" element={<Rate />} />
    </Routes>
  );
};
