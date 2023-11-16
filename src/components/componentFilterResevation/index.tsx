import { FilterMain } from "./style";
import { useState } from "react";

const types = ["Básico", "Familia", "Casal", "VIP"];

export const FilterReservation = () => {
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  return (
    <FilterMain>
      <div className="filter">
        <ul className="filter-types">
          <li
            key={"all"}
            className={selectedButton === "all" ? "selected-btn" : ""}
            onClick={() => handleButtonClick("all")}
          >
            Todos os Quartos
          </li>
          {types.map((type, index) => (
            <li
              key={index}
              className={selectedButton === type ? "selected-btn" : ""}
              onClick={() => handleButtonClick(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <form action="" className="filter-forms">
          <div>
            <label htmlFor="">Check in</label>
            <input type="date" name="checkin" id="checkin" />
          </div>

          <div>
            <label htmlFor="">Check out</label>
            <input type="date" name="checkout" id="checkout" />
          </div>
        </form>
        <div className="filter-peoples">
          <div>
            <p className="filter-name">Adultos</p>
            <button>-</button>
            <p className="filter-number">1</p>
            <button>+</button>
          </div>

          <div>
            <p className="filter-name">Crianças</p>
            <button>-</button>
            <p className="filter-number">0</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <button className="check-rooms">Checar Disponibilidade</button>
    </FilterMain>
  );
};
