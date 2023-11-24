import { ComponentTableList } from "../componentTableList";
import { TableStyled } from "../../style/tableStyle";
import { ComponentListRateRoomStyle } from "./style";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";

export const ComponentListRateRoom = () => {
  const { getTypeRoomState } = useContext(AppContext);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = extractedData.slice(indexOfFirstRoom, indexOfLastRoom);
  let totalPages = Math.ceil(extractedData.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

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
          list={currentRooms}
          modalName="modalUpdateTypeRoom"
          typeList="typeRoomId"
        />
      </TableStyled>
      <ul className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={Left} alt="" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={Right} alt="" />
        </button>
      </ul>
    </ComponentListRateRoomStyle>
  );
};
