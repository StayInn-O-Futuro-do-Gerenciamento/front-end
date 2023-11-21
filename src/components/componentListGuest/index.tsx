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
      reservation: "#23155",
      name: "Quarto Standard",
      roomNumber: 50,
      totalAmount: 20,
      amountPaid: 100.0,
      status: "clean",
    },
    {
      reservation: "#23255",
      name: "Quarto Standard",
      roomNumber: 50,
      totalAmount: 20,
      amountPaid: 100.0,
      status: "clean",
    },
    {
      reservation: "#23155",
      name: "Quarto Standard",
      roomNumber: 50,
      totalAmount: 20,
      amountPaid: 100.0,
      status: "clean",
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
            <th>Reservation ID</th>
            <th>Name</th>
            <th>Room Number</th>
            <th>Total amount</th>
            <th>Amount Paid</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <ComponentTableList list={guest} modalName="modalUpdateGuest" />
      </TableStyled>
    </ComponentListGuestStyle>
  );
};
