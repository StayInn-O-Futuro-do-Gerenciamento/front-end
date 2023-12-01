import { useContext, useEffect, useState } from "react";
import { NavBarSearchStyle } from "./style";
import { LiaUserCircle } from "react-icons/lia";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppContext } from "../../context/appContext";
import tinycolor from "tinycolor2";
import { useTranslation } from "react-i18next";
import Brazil from "../../assets/flags/brazil.png";
import USA from "../../assets/flags/united-states.png";
import Spain from "../../assets/flags/spain.png";
import { HexToCssConfiguration, hexToCSSFilter } from "hex-to-css-filter";

export const NavBarSearch = () => {
  const { setRandomColor, darkMode, toggleColorMode, toggleDarkMode } =
    useContext(AppContext);
  const root = document.documentElement;
  const orange400 = getComputedStyle(root).getPropertyValue("--orange-400");
  const [inputColor, setInputColor] = useState(orange400);

  const { i18n } = useTranslation(["reservationBar", "sidebar"]);
  const lang = i18n.language.toLowerCase();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
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

    return {
      colorPalette: shades,
    };
  };

  const config: HexToCssConfiguration = {
    acceptanceLossPercentage: 1,
    maxChecks: 10,
  };

  const handleColorChange = (event: any) => {
    setInputColor(event.target.value);
    const { colorPalette } = generateShadesOfColor(event.target.value);

    const cssFilter = hexToCSSFilter(colorPalette[4], config);

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
      "--svg-color-orange": cssFilter.filter,
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
        <img
          src={Brazil}
          onClick={() => changeLanguage("pt")}
          className={lang === "pt" ? "btnFlag-active" : "btnFlag"}
        />
        <img
          src={USA}
          onClick={() => changeLanguage("en")}
          className={lang === "en" ? "btnFlag-active" : "btnFlag"}
        />

        <img
          src={Spain}
          onClick={() => changeLanguage("es")}
          className={lang === "es" ? "btnFlag-active" : "btnFlag"}
        />
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
            value={orange400}
            onChange={handleColorChange}
          />
        </div>

        <LiaUserCircle className="iconUser" />
      </div>
    </NavBarSearchStyle>
  );
};
