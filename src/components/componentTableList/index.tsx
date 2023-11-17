import more from "../../assets/More.svg";
import { ComponentTableListStyle } from "./style";

export const ComponentTableList = ({ list }: { list: any }) => {
  return (
    <ComponentTableListStyle>
      {list.map((e: any) => (
        <tr>
          <td>{e.reservation}</td>
          <td>{e.name}</td>
          <td>{e.roomNumber}</td>
          <td>{e.totalAmount}</td>
          <td>{e.amountPaid}</td>
          <td>{e.status}</td>
          <td>
            <img src={more} alt="" />
          </td>
        </tr>
      ))}
    </ComponentTableListStyle>
  );
};
