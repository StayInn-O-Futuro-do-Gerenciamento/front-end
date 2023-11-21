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
          <div className="formUpdateGuest">
            <div className="guestData">
              <Input type="text" label="Nome" placeholder="Pode alterar" />
              <Input type="text" label="RG" placeholder="3245678901" />
              <Input type="text" label="CPF" placeholder="12345678901" />
              <Input type="text" label="PASSPORT" placeholder="123563" />
              <Input
                type="text"
                label="Nacionalidade"
                placeholder="Brasileiro"
              />
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
            </div>
            <div className="guestAddress">
              <Input label="Rua" type="text" placeholder="Rua do hospede" />
              <Input
                label="Número da residência"
                type="number"
                placeholder="Número da residência do hospede"
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="Cidade do hospede"
              />
              <Input
                label="Estado"
                type="text"
                placeholder="Estado que o hospede reside"
              />
              <Input label="CEP" type="text" placeholder="CEP do hospede" />
            </div>
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
