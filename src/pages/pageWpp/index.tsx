import { useContext } from "react";
import { Button } from "../../components/componentButton";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Sidebar } from "../../components/componentSidebar";
import { PageWppStyle } from "./style";
import { AppContext } from "../../context/appContext";

export const PageWpp = () => {
  const { loadingButton, createInstance, qrCodeWpp, instanceWpp } =
    useContext(AppContext);

  return (
    <PageWppStyle>
      <Sidebar />
      <div className="mainContet">
        <NavBarSearch />
        <div className="container-connect">
          <h2>Conectar WhatsApp</h2>
          {instanceWpp ? (
            <h2>WhatsApp Conectado</h2>
          ) : !qrCodeWpp ? (
            <div className="div1">
              <h3>Envie mensagens de confirmação para seus hóspedes!</h3>

              <div>
                <div>
                  <p>1. Clique no botão de conectar WhatsApp</p>
                </div>
                <div>
                  <p>2. Escaneie o QRcode</p>
                </div>
              </div>

              <Button
                className="button-submit"
                buttonVariation="buttonCreate"
                type="submit"
                onClick={createInstance}
                disabled={loadingButton}
              >
                {loadingButton ? "Carregando.." : "Conectar WhatsApp"}
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
