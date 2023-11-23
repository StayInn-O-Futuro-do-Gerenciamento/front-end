import More from "../../assets/More.svg";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";

export const ComponentTableList = ({ list, modalName }: any) => {
  const { handleChangeFunction } = useContext(AppContext);

  if (!list || list.length === 0) {
    return null;
  }

  const columns = Object.keys(list[0]);

  return (
    <tbody>
      {list.map((item: any, rowIndex: number) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => {
            if (colIndex === 0) {
              return (
                <td key={colIndex} className={"firstNumber"}>
                  {item[column]}
                </td>
              );
            } else if (colIndex === columns.length - 1) {
              return (
                <td key={colIndex}>
                  <p className={"status"}>{item[column]}</p>
                </td>
              );
            } else {
              return <td key={colIndex}>{item[column]}</td>;
            }
          })}
          <td>
            <img
              src={More}
              alt=""
              onClick={() => {
                handleChangeFunction(modalName, true);
                handleChangeFunction("roomId", item.id);
              }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
