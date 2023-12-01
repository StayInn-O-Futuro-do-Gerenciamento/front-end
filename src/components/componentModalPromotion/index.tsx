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
import { useTranslation } from "react-i18next";

export const ModalPromotion = () => {
  const { handleChangeFunction, getTypeRoomState, createOffer } =
    useContext(AppContext);
  const [selectedTypeRoom, setSelectedTypeRoom] =
    useState("Selecionar Hospede");
  const { t } = useTranslation(["modal"]);

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
          {t("header")}
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
            label={t("offerName")}
            placeholder={t("offerName")}
            register={register("offerName")}
          />
          {errors.offerName ? (
            <span className="errorMessage">{errors.offerName.message}</span>
          ) : (
            <></>
          )}
          <label>
            <strong>{t("offerDescription")} </strong>
          </label>
          <textarea
            {...register("offerDescription")}
            placeholder={t("offerDescription")}
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
            label={t("discount")}
            placeholder={t("discount")}
            register={register("discount")}
          />
          {errors.discount ? (
            <span className="errorMessage">{errors.discount.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="date"
            label={t("startDate")}
            register={register("startDate")}
          />
          {errors.startDate ? (
            <span className="errorMessage">{errors.startDate.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="date"
            label={t("finishDate")}
            register={register("finishDate")}
          />
          {errors.finishDate ? (
            <span className="errorMessage">{errors.finishDate.message}</span>
          ) : (
            <></>
          )}

          <label className="labelSelect" htmlFor="">
            <strong>{t("typeRoom")}</strong>
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
              {t("btnCancel")}
            </Button>
            <Button type="submit" buttonVariation="saveModal">
              {t("btnSave")}
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
