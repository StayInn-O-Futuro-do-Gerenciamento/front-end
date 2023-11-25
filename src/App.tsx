import { useContext } from "react";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/global";
import { AppContext } from "./context/appContext";

function App() {
  const { darkMode } = useContext(AppContext);
  const mode = localStorage.getItem("darkMode");

  let darkTheme = darkMode === true ? "dark" : "light";

  if (mode) {
    darkTheme = JSON.parse(mode) === true ? "dark" : "light";
  }

  const themeObject = {
    mode: darkTheme as "dark" | "light",
  };

  return (
    <>
      <GlobalStyle theme={themeObject} />
      <RoutesMain />
    </>
  );
}
export default App;
