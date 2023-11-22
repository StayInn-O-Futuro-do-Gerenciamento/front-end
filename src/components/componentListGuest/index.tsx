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
    setFilteredGuests(guestData); // Carregar todos os hóspedes por padrão
  };

  const handleShowAllGuests = () => {
    setFilteredGuests(gestAll); // Exibir todos os hóspedes
  };

  const handleShowGuestsWithReservations = async () => {
    const promises = getReservationState.map(async (reservation: any) => {
      let price = await getFrankstainHistoryPrice(reservation.guests[0].id);

      return {
        name: reservation.guests[0].name,
        nacionalidade: reservation.guests[0].nationality,
        rg: reservation.guests[0].rg,
        number: reservation.guests[0].phoneNumbers[0],
        totalPago: `R$ ${price}`,
      };
    });

    const guestsWithReservations = await Promise.all(promises);

    setFilteredGuests(guestsWithReservations);
  };

  if (!getGuestState) {
    return <div>Loading...</div>;
  }

  return (
    <ComponentListGuestStyle>
      <div className="nav-controller-guest">
        <div>
          <button onClick={handleShowAllGuests}>Todos os Hóspedes</button>
          <button onClick={handleShowGuestsWithReservations}>
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
