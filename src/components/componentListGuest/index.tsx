import { ComponentTableList } from "../componentTableList";
import { ComponentListGuestStyle, LoadingBaseStyle } from "./style";
import searchButton from "../../assets/navbar/Search.svg";
import { TableStyled } from "../../style/tableStyle";
import { AppContext } from "../../context/appContext";
import { useContext, useEffect, useState } from "react";
import Left from "../../assets/Chevron left.svg";
import Right from "../../assets/Chevron right.svg";
import ReactLoading from "react-loading";

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
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const userType = localStorage.getItem("userType");

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
        id: element.id,
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
    setCurrentPage(1);
    const guestIds = getReservationState.map(
      (reservation: any) => reservation.guests[0].id
    );

    const uniqueGuestIds = [...new Set(guestIds)];

    const guestsWithReservations: any[] = [];

    for (const guestId of uniqueGuestIds) {
      const totalPrice = await getFrankstainHistoryPrice(guestId);

      const guestInfo = getReservationState.find(
        (reservation: any) => reservation.guests[0].id === guestId
      ).guests[0];

      guestsWithReservations.push({
        id: element.id,
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
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"spinningBubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  let currentRooms = filteredGuests.slice(indexOfFirstRoom, indexOfLastRoom);
  let totalPages = Math.ceil(filteredGuests.length / roomsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

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
          {JSON.parse(userType!) == "Attendant" && (
            <div onClick={() => handleChangeFunction("modalCreateGuest", true)}>
              <p>Cadastrar hospedes</p>
            </div>
          )}
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
          list={currentRooms}
          modalName="modalUpdateGuest"
          typeList="getGuestId"
        />
      </TableStyled>
      <ul className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={Left} alt="" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={Right} alt="" />
        </button>
      </ul>
    </ComponentListGuestStyle>
  );
};
