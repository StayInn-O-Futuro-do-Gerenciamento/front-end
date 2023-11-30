import { useContext, useState } from "react";
import { NavBarSearchStyle } from "./style";
import searchImg from "../../assets/navbar/Search.svg";
import { LiaUserCircle } from "react-icons/lia";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppContext } from "../../context/appContext";
import tinycolor from "tinycolor2";
import { useTranslation } from "react-i18next";

export const NavBarSearch = () => {
  const { setRandomColor, darkMode, toggleColorMode, toggleDarkMode } =
    useContext(AppContext);
  const [inputColor, setInputColor] = useState("#f79009");

  const { i18n } = useTranslation(["reservationBar", "sidebar"]);

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  const mode = localStorage.getItem("darkMode");
  let darkTheme = darkMode;

  if (mode) {
    darkTheme = JSON.parse(mode);
  }

  const generateShadesOfColor = (color: tinycolor.ColorInput | undefined) => {
    const colorObj = tinycolor(color);
    const shades = [];

    shades.push(colorObj.toHexString());

    for (let i = 1; i <= 6; i++) {
      const shade = colorObj
        .clone()
        .lighten(i * 5)
        .toHexString();
      shades.unshift(shade);
    }

    for (let i = 1; i <= 5; i++) {
      const shade = colorObj
        .clone()
        .darken(i * 6)
        .toHexString();
      shades.push(shade);
    }

    if (JSON.parse(mode!) === true) {
      shades.reverse();
    }

    shades.shift();

    return shades;
  };

  const handleColorChange = (event: any) => {
    setInputColor(event.target.value);
    const colorPalette = generateShadesOfColor(event.target.value);

    const customProperties = {
      "--orange-50": colorPalette[0],
      "--orange-100": colorPalette[1],
      "--orange-200": colorPalette[2],
      "--orange-300": colorPalette[3],
      "--orange-400": colorPalette[4],
      "--orange-500": colorPalette[5],
      "--orange-600": colorPalette[6],
      "--orange-700": colorPalette[7],
      "--orange-800": colorPalette[8],
      "--orange-900": colorPalette[9],
    };

    setRandomColor(customProperties);
    localStorage.setItem(
      "customColorPalette",
      JSON.stringify(customProperties)
    );
  };

  return (
    <NavBarSearchStyle>
      <div className="div1">
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Procure por quartos e ofertas" />
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("pt")}>PT</button>
      </div>
      <div className="div2">
        <div>
          {darkTheme === false ? (
            <div className="modeTheme1">
              <MdDarkMode
                className="svg"
                onClick={() => {
                  toggleColorMode("dark");
                  toggleDarkMode();
                }}
              />
            </div>
          ) : (
            <div className="modeTheme2">
              <MdLightMode
                className="svg"
                onClick={() => {
                  toggleColorMode("light");
                  toggleDarkMode();
                }}
              />
            </div>
          )}
        </div>

        <div className="themes">
          <input
            type="color"
            name="color"
            id="color"
            value={inputColor}
            onChange={handleColorChange}
          />
        </div>

        <LiaUserCircle className="iconUser" />
      </div>
    </NavBarSearchStyle>
  );
};
