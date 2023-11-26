import Dashboard from "../../assets/sidebar/Dashboard.svg";
import Deals from "../../assets/sidebar/Deals.svg";
import Attendant from "../../assets/sidebar/attendant.svg";
import Hotel from "../../assets/sidebar/Hotels.svg";
import Report from "../../assets/sidebar/Report.svg";
import Reservation from "../../assets/sidebar/Reservation.svg";
import Room from "../../assets/sidebar/Room.svg";
import { SideBarMain } from "./style";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import { ModalUpdateHotel } from "../componentModalUpdateHotel";
import { ModalRegisterAttendat } from "../componentModalRegisterAttendant";
import { LuBedDouble, LuListChecks, LuLogIn, LuLogOut } from "react-icons/lu";
import logo from "../../assets/sidebar/Logo.svg";
export const Sidebar = () => {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState(location.pathname);
  const {
    handleChangeFunction,
    modalUpdateHotel,
    modalRegisterAttedant,
    hotel,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const userType = localStorage.getItem("userType");

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    navigate(buttonId);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <SideBarMain>
      {modalUpdateHotel && <ModalUpdateHotel />}
      {modalRegisterAttedant && <ModalRegisterAttendat />}
      <div className="div-logo">
        <img src={Hotel} alt="Logo" />
        <h1>{hotel && hotel.name}</h1>
      </div>
      <div className="div-btn">
        <ul>
          <li
            className={selectedButton === "/dashboard" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("/dashboard")}
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
            <LuBedDouble
              className="typeRoom"
              style={{ width: 30, height: 30, color: `#667085` }}
            />
            <p>Tipo de Quarto</p>
          </li>
          <li
            className={
              selectedButton === "/reservationList" ? "selected-btn" : ""
            }
            onClick={() => handleButtonClick("/reservationList")}
          >
            <LuListChecks
              className="typeRoom"
              style={{ width: 30, height: 30, color: `#667085` }}
            />
            <p>Lista Reservas</p>
          </li>
        </ul>
        <ul>
          {JSON.parse(userType!) == "Manager" && (
            <>
              <li
                className={
                  selectedButton === "LoginAttendent" ? "selected-btn" : ""
                }
                onClick={() => handleButtonClick("/")}
              >
                <LuLogIn
                  className="typeRoom"
                  style={{ width: 30, height: 30, color: `#667085` }}
                />
                <p>Login</p>
              </li>
              <li
                className={selectedButton === "Attendant" ? "selected-btn" : ""}
                onClick={() =>
                  handleChangeFunction("modalRegisterAttendant", true)
                }
              >
                <img src={Attendant} alt="Cadastro de Atendentes" />
                <p>+ Atendentes</p>
              </li>
            </>
          )}
          <li
            className={selectedButton === "Logout" ? "selected-btn" : ""}
            onClick={logout}
          >
            <LuLogOut
              className="typeRoom"
              style={{ width: 30, height: 30, color: `#667085` }}
            />
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <p className="copyrigth">
        <img src={logo} alt="logo sistema" />
        StayInn @2023
      </p>
    </SideBarMain>
  );
};
