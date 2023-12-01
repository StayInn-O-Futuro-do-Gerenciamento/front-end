import { useContext } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { useForm } from "react-hook-form";
import { tUpdateGuestData } from "../../schemas/schemaGuest";
import { iGuestData } from "../../context/appContext/type";
import { useTranslation } from "react-i18next";

export const ModalUpdateGuest = () => {
  const { handleChangeFunction, updateGuest, fetchUpdateData, getGuestId } =
    useContext(AppContext);
  const { t } = useTranslation(["modal"]);
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<tUpdateGuestData>({
    // resolver: zodResolver(updateGuestSchemas),
  });

  const onSubmit = (data: any) => {
    const {
      phoneNumbers: phone1,
      phoneNumbers2: phone2,
      ...requestData
    } = data;
    const guestData: iGuestData = {
      ...requestData,
      phoneNumbers: [phone1, phone2],
    };

    const dataBody = Object.fromEntries(
      Object.entries(guestData).filter(([key, value]) => {
        if (Array.isArray(value)) {
          return value.filter((item) => item !== "").length > 0;
        } else if (typeof value === "object" && value !== null) {
          return Object.values(value).filter((item) => item !== "").length > 0;
        }

        return value !== "" && value !== undefined;
      })
    );

    if (Object.keys(dataBody).length > 0) {
      updateGuest(dataBody);
    } else {
    }
  };

  return (
    <ContainerModal>
      <div className="modalUpdateGuest">
        <HeaderModal>
          {t("titleUpdateGuest")}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalUpdateGuest", false)}
          >
            X
          </Button>
        </HeaderModal>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="formUpdateGuest">
            <div className="guestData">
              <Input
                type="text"
                label={t("name")}
                placeholder="Pode alterar"
                register={register("name")}
                defaultValue={fetchUpdateData.name}
              />
              <Input
                type="text"
                label={t("rg")}
                placeholder="3245678901"
                register={register("rg")}
                defaultValue={fetchUpdateData.rg}
                disable
              />
              <Input
                type="text"
                label={t("cpf")}
                placeholder="12345678901"
                register={register("cpf")}
                defaultValue={fetchUpdateData.cpf}
                disable
              />
              <Input
                type="text"
                label={t("passport")}
                placeholder="123563"
                register={register("passport")}
                defaultValue={fetchUpdateData.passPort}
              />
              <Input
                type="text"
                label={t("nationality")}
                placeholder="Brasileiro"
                register={register("nationality")}
                defaultValue={fetchUpdateData.nationality}
              />
              <label className="labelContat" htmlFor="">
                <strong>{t("guestContact")}</strong>
              </label>
              <div className="phoneNumber">
                <Input
                  type="number"
                  placeholder={t("phoneNumber")}
                  register={register("phoneNumbers")}
                  defaultValue={fetchUpdateData.phoneNumber}
                />
                <Input
                  type="number"
                  placeholder={t("phoneNumber2")}
                  register={register("phoneNumbers2")}
                  defaultValue={fetchUpdateData.phoneNumber2}
                />
              </div>
              <label className="labelContat" htmlFor="">
                <strong>{t("emergencyContact")}</strong>
              </label>
              <div className="emergencyContacts">
                <Input type="text" placeholder={t("emergencyContactName")} />
                <Input
                  type="number"
                  placeholder={t("emergencyContactNumber")}
                />
              </div>
              <div className="emergencyContacts">
                <Input type="text" placeholder={t("emergencyContactName")} />
                <Input
                  type="number"
                  placeholder={t("emergencyContactNumber")}
                />
              </div>
            </div>
            <div className="guestAddress">
              <Input
                label={t("street")}
                type="text"
                placeholder="Rua do hospede"
              />
              <Input
                label={t("residenceNumber")}
                type="number"
                placeholder="Número da residência do hospede"
                register={register("address.number")}
                // defaultValue={fetchUpdateData.address.number}
              />
              <Input
                label={t("city")}
                type="text"
                placeholder="Cidade do hospede"
                register={register("address.city")}
                // defaultValue={fetchUpdateData.address.city}
              />
              <Input
                label={t("state")}
                type="text"
                placeholder="Estado que o hospede reside"
                register={register("address.state")}
                // defaultValue={fetchUpdateData.address.state}
              />
              <Input
                label={t("zipCode")}
                type="text"
                placeholder="CEP do hospede"
                register={register("address.zipCode")}
                // defaultValue={fetchUpdateData.address.zipCode}
              />
            </div>
          </div>

          <ContainerButtonModal>
            <Button buttonVariation="saveModal" type="submit">
              {t("btnSave")}
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
