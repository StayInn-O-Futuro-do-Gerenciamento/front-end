import { Button } from "../componentButton";
import { RoomFilteredList } from "../componentRoomList";
import { ComponentAddRoomStyle } from "./style";

export const ComponentAddRoom = () => {
  return (
    <ComponentAddRoomStyle>
      <div>
        <div>
          <Button type="button" buttonVariation="filterButton">
            All Room({20})
          </Button>
          <Button type="button" buttonVariation="filterButton">
            Avaliable Room({21})
          </Button>
          <Button type="button" buttonVariation="filterButton">
            Booked({22})
          </Button>
        </div>
        <div>
          <Button type="button" buttonVariation="buttonCreate">
            Add Room
          </Button>
        </div>
      </div>
      <RoomFilteredList />
    </ComponentAddRoomStyle>
  );
};
