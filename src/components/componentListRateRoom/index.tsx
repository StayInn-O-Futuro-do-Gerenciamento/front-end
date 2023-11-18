import { Button } from "../componentButton";
import imgFilter from "../../assets/Filter.svg";
import { ComponentTableList } from "../componentTableList";
import { TableStyled } from "../../style/tableStyle";
import { ComponentListRateRoomStyle } from "./style";

export const ComponentListRateRoom = () => {
  const rooms = [
    {
      roomNumber: "A1",
      roomType: "Básico",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar, corda, facão",
      status: "500",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "A2",
      roomType: "Básico",
      roomFloor: "1°",
      roomFacilitys: "Cama, frigobar",
      status: "600",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "B12",
      roomType: "VIP",
      roomFloor: "2°",
      roomFacilitys:
        "Cama, frigobar, Televisão 12 polegadas, hidromassagem ,hidromassagem, hidromassagem, hidromassagem",
      status: "900",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "A2",
      roomType: "Básico",
      roomFloor: "2°",
      roomFacilitys: "Cama, frigobar",
      status: "700",
      avaliabity: "5 roomss",
    },
    {
      roomNumber: "D45",
      roomType: "Familia",
      roomFloor: "4°",
      roomFacilitys: "Cama, frigobar, fogão",
      status: "800",
      avaliabity: "5 roomss",
    },
  ];

  return (
    <ComponentListRateRoomStyle>
      <div>
        <div>
          <Button type="button" buttonVariation="buttonCreate">
            Add Rate
          </Button>
          <Button type="button" buttonVariation="filterButton">
            <img src={imgFilter} alt="" />
            Add Rate
          </Button>
        </div>
      </div>
      <TableStyled>
        <thead>
          <th>Room Type</th>
          <th>Deals</th>
          <th>Cancelation Politicy</th>
          <th>Deal Price</th>
          <th>Rate</th>
          <th>Avaliabity</th>
          <th></th>
        </thead>
        <ComponentTableList list={rooms} />
      </TableStyled>
    </ComponentListRateRoomStyle>
  );
};
