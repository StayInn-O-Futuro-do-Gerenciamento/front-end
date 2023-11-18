import More from "../../assets/More.svg";

export const ComponentTableList = ({ list }: { list: any[] }) => {
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
            <img src={More} alt="" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
