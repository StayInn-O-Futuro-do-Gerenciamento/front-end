import More from "../../assets/More.svg";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import { TableRow } from "./style";
import { FaStar, FaRegStar } from "react-icons/fa";

export const ComponentTableList = ({ list, modalName, typeList }: any) => {
  const { handleChangeFunction, getRoomState, setFetchUpdateData } =
    useContext(AppContext);

  if (!list || list.length === 0) {
    return null;
  }

  const renderFeedback = (feedback: number) => {
    const starArray = [...Array(feedback)].map((_, i) => (
      <FaStar className="estrela1" key={i} />
    ));
    const emptyStarArray = [...Array(5 - feedback)].map((_, i) => (
      <FaRegStar className="estrela2" key={i} />
    ));

    return (
      <span>
        {starArray}
        {emptyStarArray}
      </span>
    );
  };

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

        if (status === "Limpo" || status === "Clean") {
          statusColor = "clean";
        } else if (status === "Sujo" || status === "Dirty") {
          statusColor = "dirty";
        } else if (
          status === "Em Manutenção" ||
          status === "Under Maintenance"
        ) {
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
                      {column === "feedBack"
                        ? renderFeedback(Number(itemWithoutId[column]))
                        : itemWithoutId[column]}
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
