import { useContext } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ModalUpdatePromotion = () => {
  const { handleChangeFunction, getTypeRoomState, updateOffer } =
    useContext(AppContext);
  const { t } = useTranslation(["modal"]);
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
          {t("headerUpdate")}
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
            label={t("offerName")}
            placeholder={t("offerName")}
            register={register("offerName")}
          />
          <label>
            <strong>{t("offerDescription")} </strong>
          </label>
          <textarea
            {...register("offerDescription")}
            placeholder={t("offerDescription")}
          ></textarea>
          <Input
            type="number"
            label={t("discount")}
            placeholder={t("discount")}
            register={register("discount")}
          />
          <Input
            type="date"
            label={t("startDate")}
            register={register("startDate")}
          />
          <Input
            type="date"
            label={t("finishDate")}
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
