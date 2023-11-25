import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import profile from "../../assets/profile/perfil.png";
import { AppContext } from "../../context/appContext";
import { useContext, useState } from "react";
import { iGuestData } from "../../context/appContext/type";
import {
  registerGuestData,
  registerGuestSchemas,
} from "../../schemas/schemaGuest";
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalRegisterGuest = () => {
  const { handleChangeFunction, registerGuest } = useContext(AppContext);
  const [indexes, setIndexes] = useState<any>([]) as any;
  const [counter, setCounter] = useState<any>(0) as any;

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
    const { phoneNumbers: phone1, phoneNumber2: phone2, ...requestData } = data;
    const guestData: iGuestData = {
      ...requestData,
      phoneNumbers: [phone1, phone2],
    };
    console.log(guestData);
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
          Cadastrar hospede{" "}
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
                label="Nome"
                type="text"
                placeholder="Nome do hospede"
                register={register("name")}
              />
              {errors.name ? (
                <span className="errorMessage">{errors.name.message}</span>
              ) : (
                <></>
              )}
              <Input
                label="RG"
                type="number"
                placeholder="RG do hospede"
                register={register("rg")}
              />
              {errors.rg ? (
                <span className="errorMessage">{errors.rg.message}</span>
              ) : (
                <></>
              )}
              <Input
                label="CPF"
                type="number"
                placeholder="CPF do hospede"
                register={register("cpf")}
              />
              {errors.cpf ? (
                <span className="errorMessage">{errors.cpf.message}</span>
              ) : (
                <></>
              )}
              <Input
                label="PASSPORT"
                type="number"
                placeholder="PASSPORT do hospede"
                register={register("passport")}
              />
              {errors.passport ? (
                <span className="errorMessage">{errors.passport.message}</span>
              ) : (
                <></>
              )}
              <Input
                label="Nacionalidade"
                type="text"
                placeholder="Nacionalidade do hospede"
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
                <h5>Contato do hospede</h5>
              </div>
              <div className="phoneNumber">
                <div>
                  <Input
                    type="number"
                    placeholder="Celular 1"
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
                    placeholder="Celular 2"
                    register={register("phoneNumber2")}
                  />
                  {errors.phoneNumber2 ? (
                    <span className="errorMessage">
                      {errors.phoneNumber2.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <label htmlFor="">
                <strong>Contato de emergência</strong>
              </label>
              <div className="emergencyContacts">
                <button
                  type="button"
                  onClick={addEmergencyContact}
                  className="contactBase"
                >
                  Adicionar Contanto
                </button>
                {indexes.map((index: any) => (
                  <div key={index}>
                    <Input
                      type="text"
                      placeholder="Nome do contato"
                      register={register(`emergencyContacts.${index}.name`)}
                    />
                    {errors.emergencyContacts?.[index]?.name && (
                      <span className="errorMessage">
                        {errors.emergencyContacts[index]?.name?.message}
                      </span>
                    )}

                    <Input
                      type="number"
                      placeholder="Número do contato"
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
                      Remover Contanto
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={clearEmergencyContact}
                  className="contactBase"
                >
                  Limpar Contatos
                </button>
              </div>
            </div>
            <div className="guestAddress">
              <Input
                label="Rua"
                type="text"
                placeholder="Rua do hospede"
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
                label="Número da residência"
                type="number"
                placeholder="Número da residência do hospede"
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
                label="Cidade"
                type="text"
                placeholder="Cidade do hospede"
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
                label="Estado"
                type="text"
                placeholder="Estado que o hospede reside"
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
                label="CEP"
                type="text"
                placeholder="CEP do hospede"
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
