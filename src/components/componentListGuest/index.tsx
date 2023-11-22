import { ComponentTableList } from "../componentTableList";
import { ComponentListGuestStyle } from "./style";
import filterImg from "../../assets/Filter.svg";
import searchButton from "../../assets/navbar/Search.svg";
import { TableStyled } from "../../style/tableStyle";
import { AppContext } from "../../context/appContext";
import { useContext, useEffect, useState } from "react";

export const ComponentListGuest = () => {
  const { handleChangeFunction, getGuestState, getFrankstainHistoryPrice } =
    useContext(AppContext);

  const [gestAll, setGestAll] = useState<any>([]); // Use state para armazenar os dados

  useEffect(() => {
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
          totalPago: price,
        };
      });

      // Aguarda todas as solicitações assíncronas
      const guestData = await Promise.all(promises);
      setGestAll(guestData); // Atualiza o estado com os dados obtidos
    };

    fetchData();
  }, [getGuestState, getFrankstainHistoryPrice]);

  if (!getGuestState) {
    return <div>Loading...</div>;
  }

  // console.log(gestAll);

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
        <ComponentTableList list={gestAll} modalName="modalUpdateGuest" />
      </TableStyled>
    </ComponentListGuestStyle>
  );
};
