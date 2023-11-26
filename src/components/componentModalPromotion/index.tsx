import { useContext, useState } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { addOfferSchemas } from "../../schemas/schemaOffer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import moment from "moment";

export const ModalPromotion = () => {
  const { handleChangeFunction, getTypeRoomState, createOffer } =
    useContext(AppContext);
  const [selectedTypeRoom, setSelectedTypeRoom] =
    useState("Selecionar Hospede");

  if (!getTypeRoomState) {
    return (
      <ContainerModal>
        <h3>loading...</h3>
      </ContainerModal>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(addOfferSchemas),
  });

  const onSubmit = (data: any) => {
    data.discount = Number(data.discount);
    data.startDate = new Date(data.startDate);
    data.finishDate = new Date(data.finishDate);
    data.startDate = moment(data.startDate).format("YYYY-MM-DDTHH:mm:ss");
    data.finishDate = moment(data.finishDate).format("YYYY-MM-DDTHH:mm:ss");

    createOffer(data);
  };

  return (
    <ContainerModal>
      <div className="modalPromotion">
        <HeaderModal>
          Adicionar oferta
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalCreatePromotion", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Nome"
            placeholder="Nome da oferta"
            register={register("offerName")}
          />
          {errors.offerName ? (
            <span className="errorMessage">{errors.offerName.message}</span>
          ) : (
            <></>
          )}
          <label>
            <strong>Descrição</strong>
          </label>
          <textarea
            {...register("offerDescription")}
            placeholder="Descrição da oferta"
          ></textarea>
          {errors.offerDescription ? (
            <span className="errorMessage">
              {errors.offerDescription.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            type="number"
            label="Desconto"
            placeholder="R$ 20"
            register={register("discount")}
          />
          {errors.discount ? (
            <span className="errorMessage">{errors.discount.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="date"
            label="Data de início"
            register={register("startDate")}
          />
          {errors.startDate ? (
            <span className="errorMessage">{errors.startDate.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="date"
            label="Data de término"
            register={register("finishDate")}
          />
          {errors.finishDate ? (
            <span className="errorMessage">{errors.finishDate.message}</span>
          ) : (
            <></>
          )}

          <label className="labelSelect" htmlFor="">
            <strong>Tipo de quarto</strong>
          </label>
          <select {...register("typeRoom")} name="typeRoom">
            {getTypeRoomState.map((typeRoom: any, index: any) => (
              <option key={index} value={typeRoom.id}>
                {typeRoom.name}
              </option>
            ))}
          </select>

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() =>
                handleChangeFunction("modalCreatePromotion", false)
              }
            >
              Cancelar
            </Button>
            <Button type="submit" buttonVariation="saveModal">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
