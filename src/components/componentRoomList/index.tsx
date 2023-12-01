import { TableStyled } from "../../style/tableStyle";
import { ComponentTableList } from "../componentTableList";
import { RoomFilteredListStyled } from "./style";
import { useTranslation } from "react-i18next";

export const RoomFilteredList = ({ rooms, modalName }: any) => {
  const { t } = useTranslation(["roomFilteredList"]);
  return (
    <RoomFilteredListStyled>
      <TableStyled>
        <thead>
          <th>{t("room")}</th>
          <th>{t("type")}</th>
          <th>{t("floor")}</th>
          <th>{t("roomDescription")}</th>
          <th>{t("available")}</th>
          <th>{t("numberOfPeople")}</th>
          <th>{t("status")}</th>
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
