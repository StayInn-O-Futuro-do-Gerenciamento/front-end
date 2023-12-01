import { ComponentModalPageHotelCreateStyle } from "./style";
import logo from "../../assets/sidebar/Logo.svg";
import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface childrenForm {
  children: ReactNode;
}

export const ComponentModalPageHotelCreate: React.FC<childrenForm> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const { t } = useTranslation(["modal"]);
  useEffect(() => {
    const currentUrl = window.location.pathname;

    setCurrentUrl(currentUrl);
  }, []);

  return (
    <ComponentModalPageHotelCreateStyle>
      {currentUrl === "/hotel" ? (
        <button className="button-change-page" onClick={() => navigate("/")}>
          Registrar
        </button>
      ) : (
        <button className="button-change-page" onClick={() => navigate("/")}>
          Login
        </button>
      )}

      <div className="logo">
        <img src={logo} alt="" />
        <p>StayINN</p>
      </div>
      {children}
      <p className="direitos">{t("copyright")} </p>
    </ComponentModalPageHotelCreateStyle>
  );
};
