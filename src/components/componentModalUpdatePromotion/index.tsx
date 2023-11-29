import { useContext } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { useForm } from "react-hook-form";

export const ModalUpdatePromotion = () => {
  const { handleChangeFunction, getTypeRoomState, updateOffer } =
    useContext(AppContext);

  if (!getTypeRoomState) {
    return (
      <ContainerModal>
        <h3>Loading</h3>
      </ContainerModal>
    );
  }

  const { register, handleSubmit } = useForm<any>({});

  const onSubmit = (data: any) => {
    if (data.discount !== "") {
      data.discount = Number(data.discount);
    }
    const dataBody = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    if (Object.keys(dataBody).length > 0) {
      updateOffer(dataBody);
    } else {
    }
  };

  return (
    <ContainerModal>
      <div className="modalPromotion">
        <HeaderModal>
          Atualizar oferta
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalUpdatePromotion", false)}
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
          <label>
            <strong>Descrição</strong>
          </label>
          <textarea
            {...register("offerDescription")}
            placeholder="Descrição da oferta"
          ></textarea>
          <Input
            type="number"
            label="Desconto"
            placeholder="0%"
            register={register("discount")}
          />
          <Input
            type="date"
            label="Data de início"
            register={register("startDate")}
          />
          <Input
            type="date"
            label="Data de término"
            register={register("finishDate")}
          />

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() =>
                handleChangeFunction("modalUpdatePromotion", false)
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
