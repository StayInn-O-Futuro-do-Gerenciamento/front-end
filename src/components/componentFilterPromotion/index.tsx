import { Button } from "../componentButton";
import { StyledFilterPromotion } from "./style";
import more from "../../assets/More.svg";

export const FilterPromotion = () => {
  return (
    <StyledFilterPromotion>
      <div className="containerContent">
        <div className="buttonContainer">
          <Button type="button" buttonVariation="filterButton">
            Continua
          </Button>
          <Button type="button" buttonVariation="filterButton">
            FInalizada
          </Button>
        </div>
        <Button type="button" buttonVariation="buttonCreate">
          Adicionar oferta
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <td>Referencia da oferta</td>
            <td>Nome da oferta</td>
            <td>Reservas restantes</td>
            <td>Data final</td>
            <td>Tipo de quarto</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5644</td>
            <td>Family deal</td>
            <td>10</td>
            <td>21/3/23</td>
            <td>Vip</td>
            <td className="statusColor">
              <p>Ogaing</p>
              <img src={more} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>5644</td>
            <td>Family deal</td>
            <td>10</td>
            <td>21/3/23</td>
            <td>Vip</td>
            <td className="statusColor">
              <p>Ogaing</p>
              <img src={more} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>5644</td>
            <td>Family deal</td>
            <td>10</td>
            <td>21/3/23</td>
            <td>Vip</td>
            <td className="statusColor">
              <p>Ogaing</p>
              <img src={more} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>5644</td>
            <td>Family deal</td>
            <td>10</td>
            <td>21/3/23</td>
            <td>Vip</td>
            <td className="statusColor">
              <p>Ogaing</p>
              <img src={more} />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledFilterPromotion>
  );
};
