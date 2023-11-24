import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";
import { iRoom } from "../../context/appContext/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { tAddRoomData, addRoomSchemas } from "../../schemas/schemaRoom";

export const ModalAddRoom = () => {
  const { handleChangeFunction, createRoom } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tAddRoomData>({
    resolver: zodResolver(addRoomSchemas),
  });

  const onSubmit = (data: tAddRoomData) => {
    data.typeRoom.price = Number(data.typeRoom.price);
    data.typeRoom.roomTypeQuantity = Number(data.typeRoom.roomTypeQuantity);
    data.typeRoom.personCount = Number(data.typeRoom.personCount);
    console.log(data);
    createRoom(data);
  };

  return (
    <ContainerModal>
      <div className="modalAddRoom">
        <HeaderModal>
          Adicionar quarto{" "}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("modalCreateRoom", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Ex: vip"
            label="Tipo de quarto"
            register={register("typeRoom.name")}
          />
          {errors.typeRoom?.name ? (
            <span className="errorMessage">
              {errors.typeRoom?.name.message}
            </span>
          ) : (
            <></>
          )}
          <label>
            <strong>Descrição</strong>
          </label>
          <textarea
            placeholder="Descrição do quarto"
            {...register("typeRoom.description")}
          ></textarea>
          {errors.typeRoom?.description ? (
            <span className="errorMessage">
              {errors.typeRoom?.description.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            type="text"
            placeholder="Ex: frigobar, hidromassagem"
            label="Conforto"
            register={register("typeRoom.confort")}
          />
          {errors.typeRoom?.confort ? (
            <span className="errorMessage">
              {errors.typeRoom?.confort.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            type="number"
            placeholder="Preço do quarto"
            label="Preço"
            register={register("typeRoom.price")}
          />
          {errors.typeRoom?.price ? (
            <span className="errorMessage">
              {errors.typeRoom?.price.message}
            </span>
          ) : (
            <></>
          )}

          <label>
            <strong>Status</strong>
          </label>
          <select {...register("status")} name="status">
            <option disabled selected>
              Selecionar status
            </option>
            <option value="Limpo">Limpo</option>
            <option value="Sujo">Sujo</option>{" "}
            <option value="Em Manutenção">Em Manutenção</option>
          </select>
          {errors.status ? (
            <span className="errorMessage">{errors.status.message}</span>
          ) : (
            <></>
          )}

          <Input
            type="number"
            placeholder="Contagem de pessoas"
            label="Pessoas"
            register={register("typeRoom.personCount")}
          />
          {errors.typeRoom?.personCount ? (
            <span className="errorMessage">
              {errors.typeRoom?.personCount.message}
            </span>
          ) : (
            <></>
          )}
          <label>
            <strong>Política de cancelamento</strong>
          </label>
          <select {...register("typeRoom.rate")} name="rate">
            {/* <option disabled selected>
              Selecionar política
            </option> */}
            <option value="Flexível">Flexível</option>
            <option value="Restrito">Restrito</option>{" "}
            <option value="Sem Reembolso">Sem reembolso</option>
          </select>

          {errors.typeRoom?.rate ? (
            <span className="errorMessage">{errors.typeRoom.rate.message}</span>
          ) : (
            <></>
          )}

          <Input
            type="number"
            placeholder="Número de quartos"
            label="Número de quartos"
            register={register("typeRoom.roomTypeQuantity")}
          />
          {errors.typeRoom?.roomTypeQuantity ? (
            <span className="errorMessage">
              {errors.typeRoom?.roomTypeQuantity.message}
            </span>
          ) : (
            <></>
          )}
          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalCreateRoom", false)}
            >
              Cancelar
            </Button>
            <Button buttonVariation="saveModal" type="submit">
              Adicionar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
