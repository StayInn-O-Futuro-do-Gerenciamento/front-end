import { useContext } from "react";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/global";
import { AppContext } from "./context/appContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptTranslation from "../src/translations/pt/global.json";
import enTranslation from "../src/translations/en/global.json";
import esTranslation from "../src/translations/es/global.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: enTranslation,
      pt: ptTranslation,
      es: esTranslation,
    },
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { darkMode } = useContext(AppContext);
  const mode = localStorage.getItem("darkMode");
  const modeColor = localStorage.getItem("colorMode");
  const storedPaletteColor = localStorage.getItem("customColorPalette");

  let darkTheme = darkMode === true ? "dark" : "light";

  if (mode) {
    darkTheme = JSON.parse(mode) === true ? "dark" : "light";
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkTheme as "dark" | "light"}
      />

      <GlobalStyle
        theme={JSON.parse(modeColor!)}
        paletteColor={JSON.parse(storedPaletteColor!)}
      />
      <RoutesMain />
    </>
  );
}
export default App;
