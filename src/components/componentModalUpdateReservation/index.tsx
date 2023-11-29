import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalUpdateReservation = () => {
  const { handleChangeFunction, updateReservation, deleteReservation } =
    useContext(AppContext);

  const { register, handleSubmit } = useForm<any>({});

  const onSubmit = (data: any) => {
    if (data.feedBack !== "") {
      data.feedBack = Number(data.feedBack);
    }
    const dataBody = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    if (Object.keys(dataBody).length > 0) {
      updateReservation(dataBody);
    } else {
    }
  };

  return (
    <ContainerModal>
      <div className="modalUpdateRoom">
        <HeaderModal>
          Atualizar Reserva{" "}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("updateReservation", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="date" label="Chekin" register={register("checkin")} />
          <Input type="date" label="Chekout" register={register("checkout")} />
          <Input
            type="number"
            label="Feedback"
            placeholder="0 a 5"
            register={register("feedBack")}
            min={0}
            max={5}
          />

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() => handleChangeFunction("updateReservation", false)}
            >
              Cancelar
            </Button>
            <Button type="submit" buttonVariation="saveModal">
              Salvar
            </Button>
            <Button
              type="button"
              buttonVariation="deleteGuest"
              onClick={() => deleteReservation()}
            >
              Excluir
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
      ;
    </ContainerModal>
  );
};
