import { ComponentTableList } from "../componentTableList";
import { ComponentListGuestStyle } from "./style";
import filterImg from "../../assets/Filter.svg";
import searchButton from "../../assets/navbar/Search.svg";
import { TableStyled } from "../../style/tableStyle";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";

export const ComponentListGuest = () => {
  const { handleChangeFunction } = useContext(AppContext);

  const guest = [
    {
      name: "Quarto Standard",
      roomNumber: 50,
      totalAmount: 20,
      amountPaid: 100.0,
      status: "clean",
    },
    {
      name: "Quarto Standard",
      roomNumber: 50,
      totalAmount: 20,
      amountPaid: 100.0,
      status: "clean",
    },
    {
      name: "Maria5",
      roomNumber: "Peru",
      totalAmount: 999903859,
      amountPaid: "123456789",
      status: "R$ 500",
    },
  ];

  return (
    <ComponentListGuestStyle>
      <div className="nav-controller-guest">
        <div>
          <button>Check In</button>
          <button>Check out</button>
        </div>
        <div>
          <div onClick={() => handleChangeFunction("modalCreateGuest", true)}>
            <img src={filterImg} alt="" />
            <p>Filter</p>
          </div>
          <div>
            <img src={searchButton} alt="" />
            <input placeholder="Search by room number" type="text" />
          </div>
        </div>
      </div>
      <TableStyled>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nacionalidade</th>
            <th>Numero</th>
            <th>RG</th>
            <th>Total Pago</th>
            <th></th>
          </tr>
        </thead>
        <ComponentTableList list={guest} modalName="modalUpdateGuest" />
      </TableStyled>
    </ComponentListGuestStyle>
  );
};
