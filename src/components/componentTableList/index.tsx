import More from "../../assets/More.svg";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import { TableRow } from "./style";

export const ComponentTableList = ({ list, modalName, typeList }: any) => {
  const { handleChangeFunction, getRoomState, setFetchUpdateData } =
    useContext(AppContext);

  if (!list || list.length === 0) {
    return null;
  }

  let newList: any = [];
  list.map((item: any) => {
    const { id, ...itemWithoutId } = item;
    newList.push(itemWithoutId);
  });
  const columns = Object.keys(newList[0]);

  return (
    <tbody>
      {list.map((item: any, rowIndex: number) => {
        const { id, ...itemWithoutId } = item;
        const status = itemWithoutId["status"];
        const statusPromotion = itemWithoutId["trueRoomStatusesCount"];
        let statusColor = "";

        if (status === "Limpo") {
          statusColor = "clean";
        } else if (status === "Sujo") {
          statusColor = "dirty";
        } else if (status === "Em Manutenção") {
          statusColor = "WIP";
        }
        if (statusPromotion == "Programada") {
          statusColor = "scheduled";
        } else if (statusPromotion == "Válida") {
          statusColor = "onGoing";
        } else if (statusPromotion == "Finalizada") {
          statusColor = "finished";
        } else if (statusPromotion == "Cheio") {
          statusColor = "full";
        }

        return (
          <TableRow key={rowIndex} statusColor={statusColor}>
            {columns.map((column, colIndex) => {
              if (colIndex === 0) {
                return (
                  <td key={colIndex} className={"firstNumber"}>
                    {itemWithoutId[column]}
                  </td>
                );
              } else if (colIndex === columns.length - 1) {
                return (
                  <td key={colIndex}>
                    <p
                      className={`${status || statusPromotion ? "status" : ""}`}
                    >
                      {itemWithoutId[column]}
                    </p>
                  </td>
                );
              } else {
                return <td key={colIndex}>{itemWithoutId[column]}</td>;
              }
            })}
            <td>
              <img
                src={More}
                alt=""
                onClick={() => {
                  handleChangeFunction(modalName, true);
                  handleChangeFunction(typeList, item.id);
                  console.log(typeList);
                  setFetchUpdateData(item);
                }}
              />
            </td>
          </TableRow>
        );
      })}
    </tbody>
  );
};
