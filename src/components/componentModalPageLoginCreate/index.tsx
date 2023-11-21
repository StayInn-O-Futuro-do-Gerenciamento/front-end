import { ComponentModalPageLoginCreateStyle } from "./style";
import logo from "../../assets/sidebar/Logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ComponentModalPageLoginCreate = ({ children }) => {
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // Obter a URL completa
    const currentUrl = window.location.pathname;

    setCurrentUrl(currentUrl);
  }, []);

  return (
    <ComponentModalPageLoginCreateStyle>
      {currentUrl === "/login" ? (
        <button
          className="button-change-page"
          onClick={() => navigate("/register")}
        >
          Registrar
        </button>
      ) : (
        <button
          className="button-change-page"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}

      <div>
        <img src={logo} alt="" />
        <p>Oasis</p>
      </div>
      {children}
      <p>Todos os direitos reservados OASIS HOTEL @2023</p>
    </ComponentModalPageLoginCreateStyle>
  );
};
