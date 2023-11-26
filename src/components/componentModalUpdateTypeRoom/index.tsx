import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import {
  tUpdateTypeRoomData,
  updateTypeRoomSchemas,
} from "../../schemas/schemaRoom";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalUpdateTypeRoom = () => {
  const { handleChangeFunction, updateTypeRoom, fetchUpdateData } =
    useContext(AppContext);

  const { register, handleSubmit } = useForm<tUpdateTypeRoomData>({});

  const onSubmit = (data: tUpdateTypeRoomData) => {
    if (data.price !== "") {
      data.price = Number(data.price);
    }
    if (data.personCount !== "") {
      data.personCount = Number(data.personCount);
    }

    const dataBody = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    if (Object.keys(dataBody).length > 0) {
      updateTypeRoom(dataBody);
      console.log(dataBody);
    } else {
      console.log("Objeto vazio, não enviado.");
    }
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
            label="Conforto"
            placeholder="Conforto do tipo de quarto"
            type="text"
            register={register("confort")}
          />

          <Input
            label="Preço"
            placeholder="Preço do quarto"
            type="number"
            register={register("price")}
          />

          <label>
            <strong>Política de cancelamento</strong>
          </label>
          <select className="" {...register("rate")}>
            <option value="Flexível">Flexível</option>
            <option value="Restrito">Restrito</option>{" "}
            <option value="Sem reembolso">Sem reembolso</option>
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
