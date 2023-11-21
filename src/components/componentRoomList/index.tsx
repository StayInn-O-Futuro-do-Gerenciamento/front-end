import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { RoomFilteredListStyled } from "./style";

const rooms = [
  {
    roomNumber: "A1",
    roomType: "Básico",
    roomFloor: "1°",
    roomFacilitys: "Cama, frigobar, corda, facão",
    status: "Limpo",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "1°",
    roomFacilitys: "Cama, frigobar",
    status: "Sujo",
  },
  {
    roomNumber: "B12",
    roomType: "VIP",
    roomFloor: "2°",
    roomFacilitys:
      "Cama, frigobar, Televisão 12 polegadas, hidromassagem ,hidromassagem, hidromassagem, hidromassagem",
    status: "Em manutenção",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "2°",
    roomFacilitys: "Cama, frigobar",
    status: "Limpo",
  },
  {
    roomNumber: "D45",
    roomType: "Familia",
    roomFloor: "4°",
    roomFacilitys: "Cama, frigobar, fogão",
    status: "Sujo",
  },
];

export const RoomFilteredList = ({ modalName }: any) => {
  return (
    <RoomFilteredListStyled>
      <TableStyled>
        <thead>
          <th>Quarto</th>
          <th>Tipo</th>
          <th>Andar</th>
          <th>Descrição do quarto</th>
          <th>Status</th>
          <th></th>
        </thead>
        <ComponentTableList list={rooms} modalName={modalName} />
      </TableStyled>
    </RoomFilteredListStyled>
  );
};
