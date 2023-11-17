import More from "../../assets/More.svg";
import { RoomFilteredListStyled } from "./style";

const rooms = [
  {
    roomNumber: "A1",
    roomType: "Básico",
    roomFloor: "1",
    roomFacilitys: "Cama, frigobar, corda, facão",
    status: "Limpo",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "1",
    roomFacilitys: "Cama, frigobar",
    status: "Sujo",
  },
  {
    roomNumber: "B12",
    roomType: "VIP",
    roomFloor: "2",
    roomFacilitys:
      "Cama, frigobar, Televisão 12 polegadas, hidromassagem ,hidromassagem, hidromassagem, hidromassagem",
    status: "Em manutenção",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "2",
    roomFacilitys: "Cama, frigobar",
    status: "Limpo",
  },
  {
    roomNumber: "D45",
    roomType: "Familia",
    roomFloor: "4",
    roomFacilitys: "Cama, frigobar, fogão",
    status: "Sujo",
  },
];

export const RoomFilteredList = () => {
  return (
    <RoomFilteredListStyled>
      <table>
        <thead>
          <th>Quarto</th>
          <th>Tipo do Quarto</th>
          <th>Andar</th>
          <th>Descrição do quarto</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr>
              <td className="room-number">{room.roomNumber}</td>
              <td>{room.roomType}</td>
              <td>{room.roomFloor}</td>
              <td>{room.roomFacilitys}</td>
              <td>
                <p className="status">{room.status}</p>
              </td>
              <td>
                <img src={More} alt="Mais" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </RoomFilteredListStyled>
  );
};
