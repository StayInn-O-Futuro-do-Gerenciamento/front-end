import { StyledOverview } from "./style";

export const Overview = () => {
  const dataHotel = {
    checkIn: 50,
    checkOut: 30,
    totalDeQuartosNoHotel: 60,
    totalDeQuartosDisponiveis: 142,
    totalDeQuartosOcupados: 53,
  };

  return (
    <StyledOverview>
      <div>
        <h3>Visão geral</h3>
      </div>
      <div className="infoHotel">
        <div className="infos">
          <div className="infoDetail">
            <span>Hoje</span>
            <p>Check-in</p>
          </div>
          <span>{dataHotel.checkIn}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Hoje</span>
            <p>Check-out</p>
          </div>
          <span>{dataHotel.checkOut}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total de pessoas</span>
            <p>No hotel</p>
          </div>
          <span>{dataHotel.totalDeQuartosNoHotel}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total</span>
            <p>Quartos disponiveis</p>
          </div>
          <span>{dataHotel.totalDeQuartosDisponiveis}</span>
        </div>
        <div className="infos">
          <div className="infoDetail">
            <span>Total</span>
            <p>Quartos ocupados</p>
          </div>
          <span>{dataHotel.totalDeQuartosOcupados}</span>
        </div>
      </div>
    </StyledOverview>
  );
};
