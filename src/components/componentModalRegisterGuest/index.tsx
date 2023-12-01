import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { useContext, useState } from "react";
import { iGuestData } from "../../context/appContext/type";
import {
  registerGuestData,
  registerGuestSchemas,
} from "../../schemas/schemaGuest";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

export const ModalRegisterGuest = () => {
  const { handleChangeFunction, registerGuest } = useContext(AppContext);
  const [indexes, setIndexes] = useState<any>([]) as any;
  const [counter, setCounter] = useState<any>(0) as any;
  const { t } = useTranslation(["modal"]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerGuestData>({
    resolver: zodResolver(registerGuestSchemas),
  });

  const { fields } = useFieldArray({
    control,
    name: "emergencyContacts",
  });

  const onSubmit = (data: registerGuestData) => {
    const {
      phoneNumbers: phone1,
      phoneNumbers2: phone2,
      ...requestData
    } = data;
    const guestData: iGuestData = {
      ...requestData,
      phoneNumbers: [phone1, phone2],
    };
    registerGuest(guestData);
  };

  const addEmergencyContact = () => {
    setIndexes((prevIndexes: any) => [...prevIndexes, counter]);
    setCounter((prevCounter: any) => prevCounter + 1);
  };
  const removeEmergencyContact = (index: any) => () => {
    setIndexes((prevIndexes: any) => [
      ...prevIndexes.filter((item: any) => item !== index),
    ]);
    setCounter((prevCounter: any) => prevCounter - 1);
  };

  const clearEmergencyContact = () => {
    setIndexes([]);
  };

  return (
    <ContainerModal>
      <div className="modalRegisterGuest">
        <HeaderModal>
          {t("titleAddGuest")}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalCreateGuest", false)}
          >
            X
          </Button>
        </HeaderModal>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="formRegisterGuest">
            <div className="guestData">
              <Input
                label={t("name")}
                type="text"
                placeholder={t("name")}
                register={register("name")}
              />
              {errors.name ? (
                <span className="errorMessage">{errors.name.message}</span>
              ) : (
                <></>
              )}
              <Input
                label={t("rg")}
                type="number"
                placeholder={t("rg")}
                register={register("rg")}
              />
              {errors.rg ? (
                <span className="errorMessage">{errors.rg.message}</span>
              ) : (
                <></>
              )}
              <Input
                label={t("cpf")}
                type="number"
                placeholder={t("cpf")}
                register={register("cpf")}
              />
              {errors.cpf ? (
                <span className="errorMessage">{errors.cpf.message}</span>
              ) : (
                <></>
              )}
              <Input
                label={t("passport")}
                type="number"
                placeholder={t("passport")}
                register={register("passport")}
              />
              {errors.passport ? (
                <span className="errorMessage">{errors.passport.message}</span>
              ) : (
                <></>
              )}
              <Input
                label={t("nationality")}
                type="text"
                placeholder={t("nationality")}
                register={register("nationality")}
              />
              {errors.nationality ? (
                <span className="errorMessage">
                  {errors.nationality.message}
                </span>
              ) : (
                <></>
              )}

              <div>
                <h5>{t("guestContact")}</h5>
              </div>
              <div className="phoneNumber">
                <div>
                  <Input
                    type="number"
                    placeholder={t("phoneNumber")}
                    register={register("phoneNumbers")}
                  />
                  {errors.phoneNumbers ? (
                    <span className="errorMessage">
                      {errors.phoneNumbers.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder={t("phoneNumber2")}
                    register={register("phoneNumbers2")}
                  />
                  {errors.phoneNumbers2 ? (
                    <span className="errorMessage">
                      {errors.phoneNumbers2.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <label htmlFor="">
                <strong>{t("emergencyContact")} </strong>
              </label>
              <div className="emergencyContacts">
                <button
                  type="button"
                  onClick={addEmergencyContact}
                  className="contactBase"
                >
                  {t("btnAddContact")}
                </button>
                {indexes.map((index: any) => (
                  <div key={index}>
                    <Input
                      label={t("emergencyContactName")}
                      type="text"
                      placeholder={t("emergencyContactName")}
                      register={register(`emergencyContacts.${index}.name`)}
                    />
                    {errors.emergencyContacts?.[index]?.name && (
                      <span className="errorMessage">
                        {errors.emergencyContacts[index]?.name?.message}
                      </span>
                    )}

                    <Input
                      label={t("emergencyContactNumber")}
                      type="number"
                      placeholder={t("emergencyContactNumber")}
                      register={register(
                        `emergencyContacts.${index}.phoneNumber`
                      )}
                    />
                    {errors.emergencyContacts?.[index]?.phoneNumber && (
                      <span className="errorMessage">
                        {errors.emergencyContacts[index]?.phoneNumber?.message}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={removeEmergencyContact(index)}
                      className="removeContact"
                    >
                      {t("btnRemoveContact")}
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={clearEmergencyContact}
                  className="contactBase"
                >
                  {t("btnEraseAllContacts")}
                </button>
              </div>
            </div>
            <div className="guestAddress">
              <Input
                label={t("street")}
                type="text"
                placeholder={t("street")}
                register={register("address.street")}
              />
              {errors.address?.street ? (
                <span className="errorMessage">
                  {errors.address.street.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label={t("residenceNumber")}
                type="number"
                placeholder={t("residenceNumber")}
                register={register("address.number")}
              />
              {errors.address?.number ? (
                <span className="errorMessage">
                  {errors.address.number.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label={t("city")}
                type="text"
                placeholder={t("city")}
                register={register("address.city")}
              />
              {errors.address?.city ? (
                <span className="errorMessage">
                  {errors.address.city.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label={t("state")}
                type="text"
                placeholder={t("state")}
                register={register("address.state")}
              />
              {errors.address?.state ? (
                <span className="errorMessage">
                  {errors.address.state.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                label={t("zipCode")}
                type="text"
                placeholder={t("zipCode")}
                register={register("address.zipCode")}
              />
              {errors.address?.zipCode ? (
                <span className="errorMessage">
                  {errors.address.zipCode.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalCreateGuest", false)}
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
