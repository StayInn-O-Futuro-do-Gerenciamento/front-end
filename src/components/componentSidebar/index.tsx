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

export const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState("Dashboard");

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
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
            className={selectedButton === "Dashboard" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Dashboard")}
          >
            <img src={Dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </li>
          <li
            className={selectedButton === "Reservation" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Reservation")}
          >
            <img src={Reservation} alt="Reservas" />
            <p>Reservas</p>
          </li>
          <li
            className={selectedButton === "Report" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Report")}
          >
            <img src={Report} alt="Hóspede" />
            <p>Hóspedes</p>
          </li>
          <li
            className={selectedButton === "Room" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Room")}
          >
            <img src={Room} alt="Quartos" />
            <p>Quartos</p>
          </li>
          <li
            className={selectedButton === "Deals" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Deals")}
          >
            <img src={Deals} alt="Promoções" />
            <p>Promoções</p>
          </li>
          <li
            className={selectedButton === "Rate" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("Rate")}
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
