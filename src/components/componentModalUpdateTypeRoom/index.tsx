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
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalUpdateTypeRoom = () => {
  const { handleChangeFunction, updateTypeRoom, test } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tUpdateTypeRoomData>({
    resolver: zodResolver(updateTypeRoomSchemas),
  });

  const onSubmit = (data: tUpdateTypeRoomData) => {
    data.price = Number(data.price);
    data.roomTypeQuantity = Number(data.roomTypeQuantity);
    data.personCount = Number(data.personCount);
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
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            label="Descrição"
            placeholder="Descrição de quarto"
            type="text"
            register={register("description")}
          />
          {errors.description ? (
            <span className="errorMessage">{errors.description?.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="number"
            placeholder="Contagem de pessoas"
            label="Pessoas"
            register={register("personCount")}
          />
          {errors.personCount ? (
            <span className="errorMessage">{errors.personCount?.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="number"
            placeholder="Número de quartos"
            label="Número de quartos"
            register={register("roomTypeQuantity")}
          />
          {errors.roomTypeQuantity ? (
            <span className="errorMessage">
              {errors.roomTypeQuantity?.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            label="Conforto"
            placeholder="Conforto do tipo de quarto"
            type="text"
            register={register("confort")}
          />
          {errors.confort ? (
            <span className="errorMessage">{errors.confort?.message}</span>
          ) : (
            <></>
          )}
          <Input
            label="Preço"
            placeholder="Preço do quarto"
            type="number"
            register={register("price")}
          />
          {errors.price ? (
            <span className="errorMessage">{errors.price.message}</span>
          ) : (
            <></>
          )}
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
