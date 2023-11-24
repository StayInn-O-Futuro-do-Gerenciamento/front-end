import More from "../../assets/More.svg";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";

export const ComponentTableList = ({ list, modalName }: any) => {
  const { handleChangeFunction } = useContext(AppContext);

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

        return (
          <tr key={rowIndex}>
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
                    <p className={"status"}>{itemWithoutId[column]}</p>
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
                  handleChangeFunction("roomId", id);
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
