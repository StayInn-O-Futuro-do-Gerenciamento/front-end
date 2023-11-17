const rooms = [
  {
    roomNumber: "A1",
    roomType: "Básico",
    roomFloor: "Andar 1",
    roomFacilitys: "Cama, frigobar, corda, facão",
    status: "Limpo",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "Andar 1",
    roomFacilitys: "Cama, frigobar",
    status: "Sujo",
  },
  {
    roomNumber: "B12",
    roomType: "VIP",
    roomFloor: "Andar 2",
    roomFacilitys: "Cama, frigobar, Televisão 12 polegadas, hidromassagem",
    status: "Em manutenção",
  },
  {
    roomNumber: "A2",
    roomType: "Básico",
    roomFloor: "Andar 2",
    roomFacilitys: "Cama, frigobar",
    status: "Limpo",
  },
  {
    roomNumber: "D45",
    roomType: "Familia",
    roomFloor: "Andar 4",
    roomFacilitys: "Cama, frigobar, fogão",
    status: "Sujo",
  },
];

export const RoomFilteredList = () => {
  return (
    <>
      <table>
        <thead>
          <th>Quarto</th>
          <th>Tipo do Quarto</th>
          <th>Andar</th>
          <th>Descrição do quarto</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr>
              <td>{room.roomNumber}</td>
              <td>{room.roomType}</td>
            </tr>
          ))}
          {/* <tr>
            <td>GAnso</td>
            <td>OMEU TA MALUCO EITA PORRA</td>
            <td>12</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};
