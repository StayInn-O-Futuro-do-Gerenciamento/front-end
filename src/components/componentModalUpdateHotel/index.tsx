import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalUpdateHotel = () => {
  const { handleChangeFunction } = useContext(AppContext);

  return (
    <ContainerModal>
      <div className="modalUpdateHotel">
        <HeaderModal>
          Atualizar hotel{" "}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalUpdateHotel", false)}
          >
            X
          </Button>
        </HeaderModal>

        <Form>
          <Input label="Nome" placeholder="Nome do hotel" type="text" />
          <Input
            label="Número de quartos"
            placeholder="Número de quartos no hotel"
            type="number"
          />
          <Input label="Cidade" placeholder="Cidade do hotel" type="text" />
          <Input label="Rua" placeholder="Rua do hotel" type="text" />
          <Input label="Número" placeholder="Número do local" type="text" />
          <Input label="CEP" placeholder="CEP do hotel" type="text" />
          <ContainerButtonModal>
            <Button
              type="button"
              buttonVariation="cancelModal"
              onClick={() => handleChangeFunction("modalUpdateHotel", false)}
            >
              Cancelar
            </Button>
            <Button type="button" buttonVariation="saveModal">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
