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
          <h3>Conectar WhatsApp</h3>
          {instanceWpp ? (
            <h2>WhatsApp Conectado</h2>
          ) : !qrCodeWpp ? (
            <div>
              <h2>Envie mensagens de confirmação para seus hóspedes!</h2>
              <Button
                className="button-submit"
                buttonVariation="buttonCreate"
                type="submit"
                onClick={createInstance}
                disabled={loadingButton}
              >
                {loadingButton ? "Carregando.." : "Criar instância"}
              </Button>
            </div>
          ) : (
            <img className="qrCodeImg" src={qrCodeWpp} alt="codeQR" />
          )}
        </div>
      </div>
    </PageWppStyle>
  );
};
