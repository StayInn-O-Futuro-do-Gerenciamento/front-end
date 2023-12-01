import { useContext } from "react";
import { Button } from "../../components/componentButton";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { PageWppStyle } from "./style";
import { AppContext } from "../../context/appContext";
import { useTranslation } from "react-i18next";

export const PageWpp = () => {
  const { loadingButton, createInstance, qrCodeWpp, instanceWpp } =
    useContext(AppContext);
  const { t } = useTranslation(["wpp"]);
  return (
    <PageWppStyle>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <div className="container-connect">
          <h2>{t("connectWhatsApp")} </h2>
          {instanceWpp ? (
            <h2>{t("connectedWhatsApp")} </h2>
          ) : !qrCodeWpp ? (
            <div className="div1">
              <h3>{t("sendConfirmationMessage")}</h3>

              <div>
                <div>
                  <p>{t("clickConnectButton")}</p>
                </div>
                <div>
                  <p>{t("scanQRCode")}</p>
                </div>
              </div>

              <Button
                className="button-submit"
                buttonVariation="buttonCreate"
                type="submit"
                onClick={createInstance}
                disabled={loadingButton}
              >
                {loadingButton ? t("loading") : t("connectWhatsAppButton")}
              </Button>
            </div>
          ) : (
            <div className="qrcode">
              <img className="qrCodeImg" src={qrCodeWpp} alt="codeQR" />
            </div>
          )}
        </div>
      </div>
    </PageWppStyle>
  );
};
