// import {} from "./style";

import { CardRoom } from "../componentCardRooms";
import { StyledRoom } from "./style";

export const Room = () => {
  const quartos = [
    {
      oferta: true,
      nome: "Quarto Standard",
      quantidadeTotal: 50,
      ocupados: 20,
      precoPorDia: 100.0,
    },
    {
      oferta: false,
      nome: "Suíte Deluxe",
      quantidadeTotal: 20,
      ocupados: 5,
      precoPorDia: 200.0,
    },
    {
      oferta: true,
      nome: "Quarto Familiar",
      quantidadeTotal: 30,
      ocupados: 10,
      precoPorDia: 150.0,
    },
    {
      oferta: true,
      nome: "Suíte Executiva",
      quantidadeTotal: 15,
      ocupados: 3,
      precoPorDia: 250.0,
    },
    {
      oferta: false,
      nome: "Quarto Econômico",
      quantidadeTotal: 40,
      ocupados: 15,
      precoPorDia: 80.0,
    },
  ];

  return (
    <StyledRoom>
      <h3>Quartos</h3>

      <ul>
        {quartos.map((value, index) => (
          <CardRoom key={index} quartos={value} />
        ))}
      </ul>
    </StyledRoom>
  );
};
