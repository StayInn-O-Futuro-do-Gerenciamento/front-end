import { useContext } from "react";
import { StyledStatusRoom } from "./style";
import { AppContext } from "../../context/appContext";

export const StatusRoom = () => {
  const { getRoomState } = useContext(AppContext);

  if (!getRoomState) {
    return <div>Loading...</div>;
  }

  console.log(getRoomState);

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
      } else if (room.status === "Em manutenção") {
        manutencao++;
      }
    } else {
      ocupados++;
      if (room.status === "Limpo") {
        ocupadoLimpo++;
      } else if (room.status === "Sujos") {
        ocupadoSujo++;
      } else if (room.status === "Manutenção") {
        ocupadoManutencao++;
      }
    }
  });

  return (
    <StyledStatusRoom>
      <h3>Status dos Quartos</h3>

      <div className="container">
        <div className="occupied">
          <div className="titleOccupied">
            <h5>Quartos ocupados</h5>
            <span>{ocupados}</span>
          </div>
          <div className="other">
            <p>Limpos</p> <span>{ocupadoLimpo}</span>
          </div>
          <div className="other">
            <p>Sujo</p> <span>{ocupadoSujo}</span>
          </div>
          <div className="other">
            <p>Em manutenção</p> <span>{ocupadoManutencao}</span>
          </div>
        </div>

        <div className="available">
          <div className="titleAvailable">
            <h5>Quartos disponiveis</h5>
            <span>{disponiveis}</span>
          </div>
          <div className="other">
            <p>Limpos</p> <span>{limpos}</span>
          </div>
          <div className="other">
            <p>Sujo</p> <span>{sujos}</span>
          </div>
          <div className="other">
            <p>Em manutenção</p> <span>{manutencao}</span>
          </div>
        </div>
      </div>
    </StyledStatusRoom>
  );
};
