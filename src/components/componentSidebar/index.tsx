import Logo from "../../assets/sidebar/Logo.svg";
import Dashboard from "../../assets/sidebar/Dashboard.svg";
import Deals from "../../assets/sidebar/Deals.svg";
import Attendant from "../../assets/sidebar/attendant.svg";
import Hotel from "../../assets/sidebar/Hotels.svg";
import Logout from "../../assets/sidebar/logout.svg";
import Rate from "../../assets/sidebar/Rate.svg";
import Report from "../../assets/sidebar/Report.svg";
import Reservation from "../../assets/sidebar/Reservation.svg";
import Room from "../../assets/sidebar/Room.svg";
import { SideBarMain } from "./style";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState(location.pathname);
  const navigate = useNavigate();

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    navigate(buttonId);
  };
  return (
    <SideBarMain>
      <div className="div-logo">
        <img src={Logo} alt="Logo" />
        <h1>Oasis</h1>
      </div>
      <div className="div-btn">
        <ul>
          <li
            className={selectedButton === "/" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/")}
          >
            <img src={Dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </li>
          <li
            className={selectedButton === "/reservation" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/reservation")}
          >
            <img src={Reservation} alt="Reservas" />
            <p>Reservas</p>
          </li>
          <li
            className={selectedButton === "/guests" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/guests")}
          >
            <img src={Report} alt="Hóspede" />
            <p>Hóspedes</p>
          </li>
          <li
            className={selectedButton === "/rooms" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/rooms")}
          >
            <img src={Room} alt="Quartos" />
            <p>Quartos</p>
          </li>
          <li
            className={selectedButton === "/offers" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/offers")}
          >
            <img src={Deals} alt="Promoções" />
            <p>Promoções</p>
          </li>
          <li
            className={selectedButton === "/rates" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/rates")}
          >
            <img src={Rate} alt="Taxas" />
            <p>Taxas</p>
          </li>
        </ul>
        <ul>
          <li
            className={selectedButton === "Attendant" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Attendant")}
          >
            <img src={Attendant} alt="Cadastro de Atendentes" />
            <p>+ Atendentes</p>
          </li>
          <li
            className={selectedButton === "Hotel" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Hotel")}
          >
            <img src={Hotel} alt="Edição do Hotel" />
            <p>Edição do Hotel</p>
          </li>
          <li
            className={selectedButton === "Logout" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Logout")}
          >
            <img src={Logout} alt="Logout" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </SideBarMain>
  );
};
