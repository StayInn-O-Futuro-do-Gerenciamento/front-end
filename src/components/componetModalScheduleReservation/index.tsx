import { AppContext } from "../../context/appContext";
import { api } from "../../services/api";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { useContext, useState } from "react";
import moment from "moment";

export const ModalScheduleReservation = () => {
  const {
    handleChangeFunction,
    getGuestState,
    getRoomId,
    getTypeRoomSearchState,
  } = useContext(AppContext);
  const [selectedGuest, setSelectedGuest] = useState("Selecionar Hospede");

  if (!getGuestState) {
    return (
      <ContainerModal>
        <HeaderModal>
          <h3>Loading...</h3>
        </HeaderModal>
      </ContainerModal>
    );
  }

  const scheduleReservation = async () => {
    if (
      getTypeRoomSearchState.checkin &&
      getTypeRoomSearchState.checkout &&
      getRoomId
    ) {
      const formattedCheckin = moment(getTypeRoomSearchState.checkin).format(
        "YYYY-MM-DDTHH:mm:ss"
      );

      const formattedCheckout = moment(getTypeRoomSearchState.checkout).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      const schedule = {
        checkin: formattedCheckin,
        checkout: formattedCheckout,
        numberAdults: getTypeRoomSearchState.numberAdults,
        numberKids: getTypeRoomSearchState.numberChildrens,
        room: getRoomId,
        guest: selectedGuest,
      };
      let token: string = "";
      const local = localStorage.getItem("token");
      if (local) {
        token = JSON.parse(local);
      }
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post(`/reservation`, schedule);
      handleChangeFunction("modalScheduleReservation", false);
    }
  };

  const handleGuestChange = (event) => {
    setSelectedGuest(event.target.value);
  };

  return (
    <ContainerModal>
      <div className="modalScheduleReservation">
        <HeaderModal>
          Agendar reserva
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() =>
              handleChangeFunction("modalScheduleReservation", false)
            }
          >
            X
          </Button>
        </HeaderModal>
        <Form>
          <select name="guest" id="guest" onChange={handleGuestChange}>
            <option disabled selected>
              Selecionar hospede
            </option>
            {getGuestState.map((guest, index) => (
              <option key={index} value={guest.id}>
                {guest.name}
              </option>
            ))}
          </select>

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() => {
                handleChangeFunction("modalScheduleReservation", false);
                handleChangeFunction("roomId", null);
              }}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              buttonVariation="saveModal"
              onClick={scheduleReservation}
            >
              Agendar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
