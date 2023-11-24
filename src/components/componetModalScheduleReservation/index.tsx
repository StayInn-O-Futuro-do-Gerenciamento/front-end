import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { useContext, useState } from "react";

export const ModalScheduleReservation = () => {
  const { handleChangeFunction, getGuestState, scheduleReservation } =
    useContext(AppContext);
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

  const createReservation = () => {
    scheduleReservation(selectedGuest);
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
              onClick={createReservation}
            >
              Agendar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
