import { FilterMain } from "./style";
import { useContext, useState } from "react";
import Back from "../../assets/Chevron left.svg";
import { AppContext } from "../../context/appContext";

const types = ["Básico", "Familia", "Casal", "VIP"];

export const FilterReservation = () => {
  const { handleChangeFunction, getTypeRoomState } = useContext(AppContext);

  if (!getTypeRoomState) {
    return (
      <FilterMain>
        <h3>Loading...</h3>
      </FilterMain>
    );
  }
  const [selectedButton, setSelectedButton] = useState("all");
  const [numberAdults, setNumberAdults] = useState(1);
  const [numberChildrens, setNumberChildrens] = useState(0);
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  const addOrRemove = (type: string, operation: string) => {
    if (operation == "minus") {
      if (type == "Adult") {
        if (numberAdults > 1) {
          setNumberAdults(numberAdults - 1);
        }
      }
      if (type == "Children") {
        if (numberChildrens > 0) {
          setNumberChildrens(numberChildrens - 1);
        }
      }
    } else {
      if (type == "Adult") {
        setNumberAdults(numberAdults + 1);
      }
      if (type == "Children") {
        setNumberChildrens(numberChildrens + 1);
      }
    }
  };

  const handleCheckAvailability = () => {
    const info = {
      typeRoom: selectedButton,
      checkin: checkinDate,
      checkout: checkoutDate,
      numberAdults: numberAdults,
      numberChildrens: numberChildrens,
    };
    handleChangeFunction("searchOn", info);
  };

  return (
    <FilterMain>
      <img
        src={Back}
        alt="Voltar"
        className="back"
        onClick={() => handleChangeFunction("createReservation", false)}
      />
      <div className="filterContent">
        <div className="filter">
          <ul className="filter-types">
            <li
              key={"all"}
              className={selectedButton === "all" ? "selected-btn" : ""}
              onClick={() => handleButtonClick("all")}
            >
              Todos os Quartos
            </li>
            {getTypeRoomState.map((type: any) => (
              <li
                key={type.id}
                className={selectedButton === type.name ? "selected-btn" : ""}
                onClick={() => handleButtonClick(type.name)}
              >
                {type.name}
              </li>
            ))}
          </ul>
          <form action="" className="filter-forms">
            <div>
              <label htmlFor="">Check in</label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                value={checkinDate}
                onChange={(e) => setCheckinDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="">Check out</label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                value={checkoutDate}
                onChange={(e) => setCheckoutDate(e.target.value)}
              />
            </div>
          </form>
          <div className="filter-peoples">
            <div>
              <p className="filter-name">Adultos</p>
              <button onClick={() => addOrRemove("Adult", "minus")}>-</button>
              <p className="filter-number">{numberAdults}</p>
              <button onClick={() => addOrRemove("Adult", "More")}>+</button>
            </div>

            <div>
              <p className="filter-name">Crianças</p>
              <button onClick={() => addOrRemove("Children", "minus")}>
                -
              </button>
              <p className="filter-number">{numberChildrens}</p>
              <button onClick={() => addOrRemove("Children", "More")}>+</button>
            </div>
          </div>
        </div>
        <button className="check-rooms" onClick={handleCheckAvailability}>
          Checar Disponibilidade
        </button>
      </div>
    </FilterMain>
  );
};
