import { StyledStatusRoom } from "./style";

export const StatusRoom = () => {
  const quartos = [
    {
      quantidadeTotalOcupados: 50,
      limpo: 40,
      sujo: 5,
      emManutencao: 5,
    },
    {
      quantidadeTotalDisponiveis: 30,
      limpo: 20,
      sujo: 5,
      emManutencao: 5,
    },
  ];

  return (
    <StyledStatusRoom>
      <h3>Status dos Quartos</h3>

      <div className="container">
        <div className="occupied">
          <div className="titleOccupied">
            <h5>Quartos ocupados</h5>
            <span>{quartos[0].quantidadeTotalOcupados}</span>
          </div>
          <div className="other">
            <p>Limpos</p> <span>{quartos[0].limpo}</span>
          </div>
          <div className="other">
            <p>Sujo</p> <span>{quartos[0].sujo}</span>
          </div>
          <div className="other">
            <p>Em manutenção</p> <span>{quartos[0].emManutencao}</span>
          </div>
        </div>

        <div className="available">
          <div className="titleAvailable">
            <h5>Quartos disponiveis</h5>
            <span>{quartos[1].quantidadeTotalDisponiveis}</span>
          </div>
          <div className="other">
            <p>Limpos</p> <span>{quartos[1].limpo}</span>
          </div>
          <div className="other">
            <p>Sujo</p> <span>{quartos[1].sujo}</span>
          </div>
          <div className="other">
            <p>Em manutenção</p> <span>{quartos[1].emManutencao}</span>
          </div>
        </div>
      </div>
    </StyledStatusRoom>
  );
};
