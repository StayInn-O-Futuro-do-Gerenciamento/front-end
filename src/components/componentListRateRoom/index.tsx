import { ComponentTableList } from "../componentTableList";
import { TableStyled } from "../../style/tableStyle";
import { ComponentListRateRoomStyle } from "./style";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const ComponentListRateRoom = () => {
  const { getTypeRoomState } = useContext(AppContext);

  const extractedData = getTypeRoomState
    ? getTypeRoomState.map((roomType: any) => {
        const availableRoomsCount = roomType.rooms.filter(
          (room: any) => room.available
        ).length;

        let totalPrice = parseFloat(roomType.price);

        if (roomType.offer && roomType.offer.discount) {
          const discount = parseFloat(roomType.offer.discount);
          if (!isNaN(discount)) {
            totalPrice -= (totalPrice * discount) / 100;
          }
        }

        return {
          id: roomType.id,
          name: roomType.name,
          offerName: roomType.offer ? roomType.offer.offerName : null,
          rate: roomType.rate,
          description: roomType.description,
          price: `R$ ${roomType.price}`,
          discount:
            roomType.offer && roomType.offer.discount
              ? `${roomType.offer.discount}%`
              : null,
          totalPriceToPay: `R$ ${totalPrice}`,
          roomTypeQuantity: roomType.roomTypeQuantity,
          availableRoomsCount: availableRoomsCount,
        };
      })
    : [];

  return (
    <ComponentListRateRoomStyle>
      <div></div>
      <TableStyled>
        <thead>
          <th>Tipo de Quarto</th>
          <th>Oferta</th>
          <th>Politica de cancelamento</th>
          <th>Descrição</th>
          <th>Preço do Quarto</th>
          <th>Desconto da Oferta</th>
          <th>Total a Pagar</th>
          <th>Total de Quartos</th>
          <th>Disponíveis</th>
          <th></th>
        </thead>
        <ComponentTableList
          list={extractedData}
          modalName="modalUpdateTypeRoom"
        />
      </TableStyled>
    </ComponentListRateRoomStyle>
  );
};
