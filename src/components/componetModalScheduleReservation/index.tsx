import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { useContext } from "react";

export const ModalScheduleReservation = () => {
  const { handleChangeFunction } = useContext(AppContext);

  const guests = [
    { name: "Pedro" },
    { name: "Carlos" },
    { name: "Lucas" },
    { name: "Gustavo" },
  ];

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
          <select name="guest" id="guest">
            <option disabled selected>
              Selecionar hospede
            </option>
            {guests.map((guest, index) => (
              <option key={index} value={guest.name}>
                {guest.name}
              </option>
            ))}
          </select>

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() =>
                handleChangeFunction("modalScheduleReservation", false)
              }
            >
              Cancelar
            </Button>
            <Button type="button" buttonVariation="saveModal">
              Agendar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
