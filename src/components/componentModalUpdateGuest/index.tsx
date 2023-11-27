import { useContext } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";
import { useForm } from "react-hook-form";
import {
  tUpdateGuestData,
  updateGuestSchemas,
} from "../../schemas/schemaGuest";
import { iGuestData } from "../../context/appContext/type";
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalUpdateGuest = () => {
  const { handleChangeFunction, updateGuest, fetchUpdateData, getGuestId } =
    useContext(AppContext);

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
      console.log("Objeto vazio, não enviado.");
    }
  };
  console.log(fetchUpdateData);
  return (
    <ContainerModal>
      <div className="modalUpdateGuest">
        <HeaderModal>
          Atualizar Hospede{" "}
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
                label="Nome"
                placeholder="Pode alterar"
                register={register("name")}
                defaultValue={fetchUpdateData.name}
              />
              <Input
                type="text"
                label="RG"
                placeholder="3245678901"
                register={register("rg")}
                defaultValue={fetchUpdateData.rg}
                disable
              />
              <Input
                type="text"
                label="CPF"
                placeholder="12345678901"
                register={register("cpf")}
                defaultValue={fetchUpdateData.cpf}
                disable
              />
              <Input
                type="text"
                label="PASSPORT"
                placeholder="123563"
                register={register("passport")}
                defaultValue={fetchUpdateData.passPort}
              />
              <Input
                type="text"
                label="Nacionalidade"
                placeholder="Brasileiro"
                register={register("nationality")}
                defaultValue={fetchUpdateData.nationality}
              />
              <label className="labelContat" htmlFor="">
                <strong>Contato do hospede</strong>
              </label>
              <div className="phoneNumber">
                <Input
                  type="number"
                  placeholder="Celular 1"
                  register={register("phoneNumbers")}
                  defaultValue={fetchUpdateData.phoneNumber}
                />
                <Input
                  type="number"
                  placeholder="Celular 2"
                  register={register("phoneNumbers2")}
                  defaultValue={fetchUpdateData.phoneNumber2}
                />
              </div>
              <label className="labelContat" htmlFor="">
                <strong>Contato de emergência</strong>
              </label>
              <div className="emergencyContacts">
                <Input type="text" placeholder="Nome do contato" />
                <Input type="number" placeholder="Número do contato" />
              </div>
              <div className="emergencyContacts">
                <Input type="text" placeholder="Nome do contato" />
                <Input type="number" placeholder="Número do contato" />
              </div>
            </div>
            <div className="guestAddress">
              <Input label="Rua" type="text" placeholder="Rua do hospede" />
              <Input
                label="Número da residência"
                type="number"
                placeholder="Número da residência do hospede"
                register={register("address.number")}
                // defaultValue={fetchUpdateData.address.number}
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="Cidade do hospede"
                register={register("address.city")}
                // defaultValue={fetchUpdateData.address.city}
              />
              <Input
                label="Estado"
                type="text"
                placeholder="Estado que o hospede reside"
                register={register("address.state")}
                // defaultValue={fetchUpdateData.address.state}
              />
              <Input
                label="CEP"
                type="text"
                placeholder="CEP do hospede"
                register={register("address.zipCode")}
                // defaultValue={fetchUpdateData.address.zipCode}
              />
            </div>
          </div>

          <ContainerButtonModal>
            <Button buttonVariation="saveModal" type="submit">
              Salvar
            </Button>
            {/* <Button buttonVariation="deleteGuest" type="button">
              Deletar hospede
            </Button> */}
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
