import { useContext } from "react";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { AppContext } from "../../context/appContext";

export const ModalUpdateGuest = () => {
  const { handleChangeFunction } = useContext(AppContext);

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

        <Form>
          <Input type="text" label="Nome" placeholder="Pode alterar" />
          <Input type="text" label="RG" placeholder="3245678901" />
          <Input type="text" label="CPF" placeholder="12345678901" />
          <Input type="text" label="PASSPORT" placeholder="123563" />
          <Input type="text" label="Nacionalidade" placeholder="Brasileiro" />
          <label className="labelContat" htmlFor="">
            <strong>Contato do hospede</strong>
          </label>
          <div className="phoneNumber">
            <Input type="number" placeholder="Celular 1" />
            <Input type="number" placeholder="Celular 2" />
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

          <ContainerButtonModal>
            <Button buttonVariation="saveModal" type="button">
              Salvar
            </Button>
            <Button buttonVariation="deleteGuest" type="button">
              Deletar hospede
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
