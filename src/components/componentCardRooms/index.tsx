// import { StyledOverview } from "./style";
import More from "../../assets/More.svg";
import { StyledCardRoom } from "./styled";
export const CardRoom = ({ quartos }: any) => {
  const offer = quartos.oferta ? "lowestPriceFipe" : "outFipe";

  return (
    <StyledCardRoom>
      <div className="offer">
        <span className={offer}>
          {quartos.oferta ? "Oferta" : "Sem Oferta"}
        </span>
        <img src={More} />
      </div>
      <div className="infOffer">
        <p className="pName">{quartos.nome}</p>
        <p className="pOccupied">
          <span className="occupied">{quartos.ocupados}</span>/
          {quartos.quantidadeTotal}
        </p>
        <p className="pPrice">
          <span>R${quartos.precoPorDia}</span>/Dia
        </p>
      </div>
    </StyledCardRoom>
  );
};
