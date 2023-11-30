import { useContext } from "react";
import { LoadingBaseStyle, StyledStatusRoom } from "./style";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const StatusRoom = () => {
  const { getRoomState } = useContext(AppContext);
  const { t } = useTranslation(["statusRoom"]);

  if (!getRoomState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"bubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  if (getRoomState.length === 0) {
    return (
      <StyledStatusRoom>
        <h2> {t("noRoomsMessage")}</h2>
      </StyledStatusRoom>
    );
  }

  let disponiveis = 0;
  let ocupados = 0;

  let limpos = 0;
  let ocupadoLimpo = 0;

  let sujos = 0;
  let ocupadoSujo = 0;

  let manutencao = 0;
  let ocupadoManutencao = 0;

  getRoomState.forEach((room: any) => {
    if (room.available) {
      disponiveis++;
      if (room.status === "Limpo") {
        limpos++;
      } else if (room.status === "Sujo") {
        sujos++;
      } else if (room.status === "Em Manutenção") {
        manutencao++;
      }
    } else {
      ocupados++;
      if (room.status === "Limpo") {
        ocupadoLimpo++;
      } else if (room.status === "Sujo") {
        ocupadoSujo++;
      } else if (room.status === "Em Manutenção") {
        ocupadoManutencao++;
      }
    }
  });

  return (
    <StyledStatusRoom>
      <h3>{t("title")}</h3>
      <div className="container">
        <div className="occupied">
          <div className="titleOccupied">
            <h5>{t("occupiedRooms.title")}</h5>
            <span>{ocupados}</span>
          </div>
          <div className="other">
            <p>{t("occupiedRooms.clean")}</p> <span>{ocupadoLimpo}</span>
          </div>
          <div className="other">
            <p>{t("occupiedRooms.dirty")}</p> <span>{ocupadoSujo}</span>
          </div>
          <div className="other">
            <p>{t("occupiedRooms.maintenance")}</p>{" "}
            <span>{ocupadoManutencao}</span>
          </div>
        </div>
        <div className="available">
          <div className="titleAvailable">
            <h5>{t("availableRooms.title")}</h5>
            <span>{disponiveis}</span>
          </div>
          <div className="other">
            <p>{t("availableRooms.clean")}</p> <span>{limpos}</span>
          </div>
          <div className="other">
            <p>{t("availableRooms.dirty")}</p> <span>{sujos}</span>
          </div>
          <div className="other">
            <p>{t("availableRooms.maintenance")}</p> <span>{manutencao}</span>
          </div>
        </div>
      </div>
    </StyledStatusRoom>
  );
};
