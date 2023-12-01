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
import { useTranslation } from "react-i18next";

export const ModalUpdateTypeRoom = () => {
  const { handleChangeFunction, updateTypeRoom } = useContext(AppContext);
  const { t } = useTranslation(["modal"]);
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
    } else {
    }
  };
  return (
    <ContainerModal>
      <div className="modalUpdateTypeRoom">
        <HeaderModal>
          {t("updateTypeRoom")}
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
            label={t("name")}
            placeholder={t("name")}
            type="text"
            register={register("name")}
          />

          <Input
            label={t("descriptionLabel")}
            placeholder={t("descriptionLabel")}
            type="text"
            register={register("description")}
          />

          <Input
            type="number"
            placeholder={t("peopleCountLabel")}
            label={t("peopleCountLabel")}
            register={register("personCount")}
          />
          <Input
            label={t("confortLabel")}
            placeholder={t("confortLabel")}
            type="text"
            register={register("confort")}
          />

          <Input
            label={t("priceLabel")}
            placeholder={t("priceLabel")}
            type="number"
            register={register("price")}
          />

          <label>
            <strong>{t("cancelPolicyLabel")} </strong>
          </label>
          <select className="" {...register("rate")}>
            <option value="Flexível">{t("flexiblePolicy")} </option>
            <option value="Restrito">{t("restrictedPolicy")} </option>{" "}
            <option value="Sem reembolso">{t("noRefundPolicy")} </option>
          </select>

          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalUpdateTypeRoom", false)}
            >
              {t("btnCancel")}
            </Button>
            <Button buttonVariation="saveModal" type="submit">
              {t("btnSave")}
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
