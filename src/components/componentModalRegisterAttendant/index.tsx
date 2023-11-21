import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalRegisterAttendat = () => {
  const { modalRegisterAttedant, handleChangeFunction } =
    useContext(AppContext);

  return (
    <ContainerModal>
      <div className="modalAddAttendat">
        <HeaderModal>
          Registrar atendente{" "}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() =>
              handleChangeFunction("modalRegisterAttendant", false)
            }
          >
            X
          </Button>
        </HeaderModal>
        <Form>
          <Input type="text" placeholder="Nome do atendente" label="Nome" />
          <Input type="text" placeholder="Senha do atendente" label="Senha" />
          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() =>
                handleChangeFunction("modalRegisterAttendant", false)
              }
            >
              Cancelar
            </Button>
            <Button type="button" buttonVariation="saveModal">
              Cadastrar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
