// import { StyledOverview } from "./style";
import More from "../../assets/More.svg";
import { StyledCardRoom } from "./styled";
import { useTranslation } from "react-i18next";
export const CardRoom = ({ quartos }: any) => {
  const offer = quartos.offer == null ? "outFipe" : "lowestPriceFipe";
  const { t } = useTranslation(["roomCard"]);
  let num = 0;
  quartos.rooms.forEach((room: any) => {
    if (room.available === false) {
      num++;
    }
  });

  return (
    <StyledCardRoom>
      <div className="offer">
        <span className={offer}>{quartos.offer === null ? "" : "Oferta"}</span>
        <img src={More} />
      </div>
      <div className="infOffer">
        <p className="pName">{quartos.name}</p>
        <p className="pOccupied">
          <span className="occupied">{num}</span>/{quartos.roomTypeQuantity}
        </p>
        <p className="pPrice">
          <span>
            {t("price")}
            {quartos.price}
          </span>{" "}
          /{t("day")}
        </p>
      </div>
    </StyledCardRoom>
  );
};
