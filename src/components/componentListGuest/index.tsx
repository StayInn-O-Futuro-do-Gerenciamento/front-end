import { ComponentTableList } from "../componentTableList";
import { ComponentListGuestStyle } from "./style";
import searchButton from "../../assets/navbar/Search.svg";
import { TableStyled } from "../../style/tableStyle";
import { AppContext } from "../../context/appContext";
import { useContext, useEffect, useState } from "react";

export const ComponentListGuest = () => {
  const {
    handleChangeFunction,
    getGuestState,
    getFrankstainHistoryPrice,
    getReservationState,
  } = useContext(AppContext);

  const [gestAll, setGestAll] = useState<any>([]);
  const [filteredGuests, setFilteredGuests] = useState<any>([]);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    fetchData();
  }, [getGuestState, getFrankstainHistoryPrice]);

  const fetchData = async () => {
    if (!getGuestState) {
      return;
    }

    const promises = getGuestState.map(async (element: any) => {
      let price = await getFrankstainHistoryPrice(element.id);

      return {
        name: element.name,
        nacionalidade: element.nationality,
        rg: element.rg,
        number: element.phoneNumbers[0],
        totalPago: `R$ ${price}`,
      };
    });

    const guestData = await Promise.all(promises);
    setGestAll(guestData);
    setFilteredGuests(guestData);
  };

  const handleShowAllGuests = () => {
    setFilteredGuests(gestAll);
    setSelectedButton("all");
  };

  const handleShowGuestsWithReservations = async () => {
    const guestIds = getReservationState.map(
      (reservation: any) => reservation.guests[0].id
    );

    const uniqueGuestIds = [...new Set(guestIds)]; // Remove guest IDs duplicados

    const guestsWithReservations: any[] = [];

    for (const guestId of uniqueGuestIds) {
      const totalPrice = await getFrankstainHistoryPrice(guestId);

      const guestInfo = getReservationState.find(
        (reservation: any) => reservation.guests[0].id === guestId
      ).guests[0]; // Pega informações do hóspede

      guestsWithReservations.push({
        name: guestInfo.name,
        nacionalidade: guestInfo.nationality,
        rg: guestInfo.rg,
        number: guestInfo.phoneNumbers[0],
        totalPago: `R$ ${totalPrice}`,
      });
    }

    setFilteredGuests(guestsWithReservations);
    setSelectedButton("reservation");
  };

  if (!getGuestState) {
    return <div>Loading...</div>;
  }

  return (
    <ComponentListGuestStyle>
      <div className="nav-controller-guest">
        <div>
          <button
            className={selectedButton === "all" ? "selected-btn" : ""}
            onClick={handleShowAllGuests}
          >
            Todos os Hóspedes
          </button>
          <button
            className={selectedButton === "reservation" ? "selected-btn" : ""}
            onClick={handleShowGuestsWithReservations}
          >
            Hóspedes com Reservas
          </button>
        </div>
        <div>
          <div>
            <img src={searchButton} alt="" />
            <input placeholder="Search by room number" type="text" />
          </div>
          <div onClick={() => handleChangeFunction("modalCreateGuest", true)}>
            <p>Cadastrar hospedes</p>
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
        <ComponentTableList
          list={filteredGuests}
          modalName="modalUpdateGuest"
        />
      </TableStyled>
    </ComponentListGuestStyle>
  );
};
