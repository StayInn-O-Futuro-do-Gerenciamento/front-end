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

import { useContext } from "react";
import { NavBarSearchStyle } from "./style";
import searchImg from "../../assets/navbar/Search.svg";
import { LiaUserCircle } from "react-icons/lia";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppContext } from "../../context/appContext";
import { useTranslation } from "react-i18next";

export const NavBarSearch = () => {
  const { darkMode, toggleColorMode, toggleDarkMode } = useContext(AppContext);
  const { i18n } = useTranslation(["reservationBar", "sidebar"]);

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
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
          {darkTheme === false ? (
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
          )}
        </div>

        <LiaUserCircle className="iconUser" />
      </div>
    </NavBarSearchStyle>
  );
};
