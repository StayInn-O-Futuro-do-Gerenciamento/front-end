import { NavBarSearchStyle } from "./style";
import searchImg from "../../assets/navbar/Search.svg";
import { LiaUserCircle } from "react-icons/lia";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import Switch from "react-switch";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const NavBarSearch = () => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);
  const mode = localStorage.getItem("darkMode");

  let darkTheme = darkMode;

  if (mode) {
    darkTheme = JSON.parse(mode);
  }

  return (
    <NavBarSearchStyle>
      <div className="div1">
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Procure por quartos e ofertas" />
      </div>
      <div className="div2">
        <label>
          <Switch
            checked={!darkTheme}
            onChange={toggleDarkMode}
            onColor="#858d9d"
            onHandleColor="#48505e"
            handleDiameter={30}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            height={20}
            width={45}
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "#2b2f38",
                }}
              >
                <MdLightMode />
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "#ffffff",
                }}
              >
                <MdDarkMode />
              </div>
            }
            className="react-switch"
            id="material-switch"
          />
        </label>

        {/* <img onClick={toggleDarkMode} src={notificationImg} alt="" /> */}
        <LiaUserCircle className="iconUser" />
      </div>
    </NavBarSearchStyle>
  );
};
