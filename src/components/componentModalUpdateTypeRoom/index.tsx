import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalUpdateTypeRoom = () => {
  const { handleChangeFunction } = useContext(AppContext);
  return (
    <ContainerModal>
      <div className="modalUpdateTypeRoom">
        <HeaderModal>
          Atualizar tipo de quarto{" "}
          <Button
            buttonVariation="closeModal"
            type="button"
            onClick={() => handleChangeFunction("modalUpdateTypeRoom", false)}
          >
            X
          </Button>
        </HeaderModal>

        <Form>
          <Input
            label="Nome"
            placeholder="Nome do tipo do quarto"
            type="text"
          />
          <Input
            label="Descrição"
            placeholder="Descrição de quarto"
            type="text"
          />
          <Input
            label="Conforto"
            placeholder="Conforto do tipo de quarto"
            type="text"
          />
          <Input label="Preço" placeholder="Preço do quarto" type="number" />
          <label>
            <strong>Política de cancelamento</strong>
          </label>
          <select className="">
            <option disabled selected>
              Selecionar política
            </option>
            <option value="flexível">Flexível</option>
            <option value="restrito">Restrito</option>{" "}
            <option value="semReembolso">Sem reembolso</option>
          </select>

          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalUpdateTypeRoom", false)}
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
