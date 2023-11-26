import { useContext } from "react";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/global";
import { AppContext } from "./context/appContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <GlobalStyle theme={themeObject} />
      <RoutesMain />
    </>
  );
}
export default App;
