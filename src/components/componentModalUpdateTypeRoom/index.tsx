import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { tUpdateTypeRoomData } from "../../schemas/schemaRoom";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalUpdateTypeRoom = () => {
  const { handleChangeFunction, updateTypeRoom, getTypeRoomSearchState } =
    useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tUpdateTypeRoomData>({});

  const onSubmit = (data: tUpdateTypeRoomData) => {
    console.log(data);
    updateTypeRoom(data);
  };
  return (
    <ContainerModal>
      <div className="modalUpdateTypeRoom">
        <HeaderModal>
          Atualizar tipo de quarto{" "}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalUpdateTypeRoom", false)}
          >
            X
          </Button>
        </HeaderModal>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            placeholder="Nome do tipo do quarto"
            type="text"
            register={register("name")}
          />
          <Input
            label="Descrição"
            placeholder="Descrição de quarto"
            type="text"
            register={register("description")}
          />
          <Input
            type="number"
            placeholder="Contagem de pessoas"
            label="Pessoas"
            register={register("personCount")}
          />
          <Input
            type="number"
            placeholder="Número de quartos"
            label="Número de quartos"
            register={register("roomTypeQuantity")}
          />
          <Input
            label="Conforto"
            placeholder="Conforto do tipo de quarto"
            type="text"
            register={register("confort")}
          />
          <Input label="Preço" placeholder="Preço do quarto" type="number" />
          <label>
            <strong>Política de cancelamento</strong>
          </label>
          <select className="" {...register("rate")}>
            <option disabled selected>
              Selecionar política
            </option>
            <option value="flexível">Flexível</option>
            <option value="restrito">Restrito</option>{" "}
            <option value="semReembolso">Sem reembolso</option>
          </select>

          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalUpdateTypeRoom", false)}
            >
              Cancelar
            </Button>
            <Button buttonVariation="saveModal" type="submit">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
