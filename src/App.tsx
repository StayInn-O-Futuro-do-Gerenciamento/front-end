import { Dashboard } from "./pages/pageDashboard";
import { FilterReservation } from "./components/componentFilterResevation";
import { RoomFilteredList } from "./components/componentRoomList";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <FilterReservation />
      <RoomFilteredList />
    </>
  );
}

export default App;
