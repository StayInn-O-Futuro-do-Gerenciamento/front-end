import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import profile from "../../assets/profile/perfil.png";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";

export const ModalRegisterGuest = () => {
  const { handleChangeFunction } = useContext(AppContext);

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

        <div className="hospedeImage">
          <img src={profile} className="containerImage"></img>
          <div>
            <Button buttonVariation="addImageHospede" type="button">
              Adicionar foto
            </Button>
          </div>
        </div>

        <Form>
          <div className="formRegisterGuest">
            <div className="guestData">
              <Input label="nome" type="text" placeholder="Nome do hospede" />
              <Input label="RG" type="number" placeholder="RG do hospede" />
              <Input label="CPF" type="number" placeholder="CPF do hospede" />
              <Input
                label="PASSPORT"
                type="number"
                placeholder="PASSPORT do hospede"
              />
              <Input
                label="Nacionalidade"
                type="text"
                placeholder="Nacionalidade do hospede"
              />

              <label htmlFor="">
                <strong>Contato do hospede</strong>
              </label>
              <div className="phoneNumber">
                <Input type="number" placeholder="Celular 1" />
                <Input type="number" placeholder="Celular 2" />
              </div>

              <label htmlFor="">
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
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalCreateGuest", false)}
            >
              Cancelar
            </Button>
            <Button buttonVariation="saveModal" type="button">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
