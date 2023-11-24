import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { RoomFilteredListStyled } from "./style";

export const RoomFilteredList = ({ rooms, modalName }: any) => {
  return (
    <RoomFilteredListStyled>
      <TableStyled>
        <thead>
          <th>Id do Quarto</th>
          <th>Quarto</th>
          <th>Tipo</th>
          <th>Andar</th>
          <th>Descrição do quarto</th>
          <th>Disponivel</th>
          <th>Quantidades de pessoas</th>
          <th>Status</th>
          <th></th>
        </thead>
        <ComponentTableList
          list={rooms}
          modalName={modalName}
          typeList="roomId"
        />
      </TableStyled>
    </RoomFilteredListStyled>
  );
};
