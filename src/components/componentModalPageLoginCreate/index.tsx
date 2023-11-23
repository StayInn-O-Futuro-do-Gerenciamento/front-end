import { ComponentModalPageLoginCreateStyle } from "./style";
import logo from "../../assets/sidebar/Logo.svg";
import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface childrenForm {
  children: ReactNode;
}

export const ComponentModalPageLoginCreate: React.FC<childrenForm> = ({
  children,
}) => {
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

      <div className="logo">
        <img src={logo} alt="" />
        <p>Oasis</p>
      </div>
      {children}
      <p className="direitos">Todos os direitos reservados OASIS HOTEL @2023</p>
    </ComponentModalPageLoginCreateStyle>
  );
};
