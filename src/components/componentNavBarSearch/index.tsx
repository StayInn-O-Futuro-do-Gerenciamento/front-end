// import { NavBarSearchStyle } from "./style";
// import searchImg from "../../assets/navbar/Search.svg";
// import { LiaUserCircle } from "react-icons/lia";
// import { useContext } from "react";
// import { AppContext } from "../../context/appContext";
// import Switch from "react-switch";
// import { MdDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";

// export const NavBarSearch = () => {
//   const { darkMode, toggleDarkMode, colorMode, toggleColorMode } =
//     useContext(AppContext);
//   const mode = localStorage.getItem("darkMode");

//   let darkTheme = darkMode;

//   if (mode) {
//     darkTheme = JSON.parse(mode);
//   }

//   return (
//     <NavBarSearchStyle>
//       <div className="div1">
//         <img src={searchImg} alt="" />
//         <input type="text" placeholder="Procure por quartos e ofertas" />
//       </div>
//       <div className="div2">
//         <label>
//           <Switch
//             checked={!darkTheme}
//             onChange={toggleDarkMode}
//             onColor="#858d9d"
//             onHandleColor="#48505e"
//             handleDiameter={30}
//             boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//             height={20}
//             width={45}
//             uncheckedIcon={false}
//             checkedIcon={false}
//             uncheckedHandleIcon={
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100%",
//                   color: "#2b2f38",
//                 }}
//               >
//                 <MdLightMode />
//               </div>
//             }
//             checkedHandleIcon={
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100%",
//                   color: "#ffffff",
//                 }}
//               >
//                 <MdDarkMode />
//               </div>
//             }
//             className="react-switch"
//             id="material-switch"
//           />
//         </label>

//         <>
//           {darkTheme === false ? (
//             <button onClick={() => toggleColorMode("light/blue")}>Blue</button>
//           ) : (
//             <button onClick={() => toggleColorMode("dark/blue")}>Blue</button>
//           )}
//         </>

//         <LiaUserCircle className="iconUser" />
//       </div>
//     </NavBarSearchStyle>
//   );
// };

import { useContext, useState } from "react";
import { NavBarSearchStyle } from "./style";
import searchImg from "../../assets/navbar/Search.svg";
import { LiaUserCircle } from "react-icons/lia";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppContext } from "../../context/appContext";
import tinycolor from "tinycolor2";

export const NavBarSearch = () => {
  const { darkMode, toggleColorMode, toggleDarkMode, setRandomColor } =
    useContext(AppContext);
  const [inputColor, setInputColor] = useState("#f79009");

  const mode = localStorage.getItem("darkMode");
  let darkTheme = darkMode;

  if (mode) {
    darkTheme = JSON.parse(mode);
  }

  // const generateShadesOfColor = (color: tinycolor.ColorInput | undefined) => {
  //   const colorObj = tinycolor(color);
  //   const shades = [];

  //   shades.push(colorObj.toHexString()); // Posição 400: cor escolhida

  //   for (let i = 1; i <= 4; i++) {
  //     const shade = colorObj
  //       .clone()
  //       .lighten(i * 10)
  //       .toHexString();
  //     shades.unshift(shade); // Posições intermediárias entre 400 e 50 (mais claro)
  //   }

  //   for (let i = 1; i <= 5; i++) {
  //     const shade = colorObj
  //       .clone()
  //       .darken(i * 10)
  //       .toHexString();
  //     shades.push(shade); // Posições intermediárias entre 400 e 900 (mais escuro)
  //   }

  //   shades.splice(5, 1); // Remove a cor na posição 0

  //   return shades;
  // };

  // const handleColorChange = (event: any) => {
  //   setInputColor(event.target.value);
  //   const colorPalette = generateShadesOfColor(event.target.value);

  //   const customProperties = colorPalette.reduce((acc, shade, index) => {
  //     return {
  //       ...acc,
  //       [`--orange-${index === 0 ? "50" : index * 100}`]: shade, // Ajuste para iniciar em 50 e evitar a cor 0
  //     };
  //   }, {});

  //   setRandomColor(customProperties);
  //   localStorage.setItem(
  //     "customColorPalette",
  //     JSON.stringify(customProperties)
  //   );
  // };

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
          {/* {darkTheme === false ? (
            <div className="buttonColorsW">
              <button
                className="bb"
                onClick={() => toggleColorMode("light/blue")}
              ></button>
              <button
                className="br"
                onClick={() => toggleColorMode("light/red")}
              ></button>
              <button
                className="bg"
                onClick={() => toggleColorMode("light/green")}
              ></button>
            </div>
          ) : (
            <div className="buttonColorsD">
              <button
                className="bb"
                onClick={() => toggleColorMode("dark/blue")}
              ></button>
              <button
                className="br"
                onClick={() => toggleColorMode("dark/red")}
              ></button>
              <button
                className="bg"
                onClick={() => toggleColorMode("dark/green")}
              ></button>
            </div>
          )} */}
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
