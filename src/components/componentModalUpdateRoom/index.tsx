import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { tUpdateRoomData } from "../../schemas/schemaRoom";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const ModalUpdateRoom = () => {
  const { handleChangeFunction, updateRoom, fetchUpdateData } =
    useContext(AppContext);
  const { t } = useTranslation(["modal"]);

  const {
    register,
    handleSubmit,
    formState: {},
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
          {t("updateRoom")}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("modalUpdateRoom", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label className="labelSelect" htmlFor="">
            <strong>{t("availability")} </strong>
          </label>
          <select className="statusRoom" id="" {...register("available")}>
            <option value="Disponível">{t("availableLabel")} </option>
            <option value="Ocupado">{t("occupiedLabel")} </option>
          </select>
          <label className="labelSelect" htmlFor="">
            <strong>{t("statusLabel")}</strong>
          </label>
          <select
            defaultValue={fetchUpdateData.status}
            className="statusRoom"
            {...register("status")}
          >
            <option value="Limpo">{t("cleanStatus")}</option>
            <option value="Sujo">{t("dirtyStatus")}</option>
            <option value="Em Manutenção">{t("maintenanceStatus")}</option>
          </select>

          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() => handleChangeFunction("modalUpdateRoom", false)}
            >
              {t("btnCancel")}
            </Button>
            <Button type="submit" buttonVariation="saveModal">
              {t("btnSave")}
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
      ;
    </ContainerModal>
  );
};
