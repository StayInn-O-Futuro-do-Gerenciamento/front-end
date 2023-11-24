import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { tUpdateRoomData } from "../../schemas/schemaRoom";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";
import { iUpdateRoom } from "../../context/appContext/type";

export const ModalUpdateRoom = () => {
  const { handleChangeFunction, updateRoom, getRoomState, test } =
    useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tUpdateRoomData>({});

  const onSubmit = (data: tUpdateRoomData) => {
    if (data.available === "Ocupado") {
      data.available = false;
    } else if (data.available === "Disponível") {
      data.available = true;
    }
    updateRoom(data);
  };

  return (
    <ContainerModal>
      <div className="modalUpdateRoom">
        <HeaderModal>
          Atualizar quarto{" "}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("modalUpdateRoom", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Chave secreta"
            placeholder="default value"
            disable
            defaultValue={test?.status}
          />
          <label className="labelSelect" htmlFor="">
            <strong>Disponibilidade</strong>
          </label>
          <select className="statusRoom" id="" {...register("available")}>
            <option value="Disponível">Disponível</option>
            <option value="Ocupado">Ocupado</option>
          </select>
          <label className="labelSelect" htmlFor="">
            <strong>Status</strong>
          </label>
          <select
            defaultValue={getRoomState}
            className="statusRoom"
            {...register("status")}
          >
            <option value="Limpo">Limpo</option>
            <option value="Sujo">Sujo</option>
            <option value="Em Manutenção">Em Manutenção</option>
          </select>

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() => handleChangeFunction("modalUpdateRoom", false)}
            >
              Cancelar
            </Button>
            <Button type="submit" buttonVariation="saveModal">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
      ;
    </ContainerModal>
  );
};
