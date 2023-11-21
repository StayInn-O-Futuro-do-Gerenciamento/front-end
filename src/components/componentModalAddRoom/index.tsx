import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";

export const ModalAddRoom = () => {
  const { handleChangeFunction } = useContext(AppContext);

  return (
    <ContainerModal>
      <div className="modalAddRoom">
        <HeaderModal>
          Adicionar quarto{" "}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("modalCreateRoom", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form>
          <Input type="text" placeholder="Nome" label="Nome do quarto" />
          <label>
            <strong>Descrição</strong>
          </label>
          <textarea placeholder="Descrição do quarto"></textarea>
          <label>
            <strong>Disponibilidade</strong>
          </label>
          <select name="" id="">
            <option disabled selected>
              Selecionar disponibilidade
            </option>
            <option value="ocupado">Ocupado</option>
            <option value="disponivel">Disponível</option>{" "}
          </select>

          <label>
            <strong>Status</strong>
          </label>
          <select className="">
            <option disabled selected>
              Selecionar status
            </option>
            <option value="limpo">Limpo</option>
            <option value="sujo">Sujo</option>{" "}
            <option value="manuntencao">Manutenção</option>
          </select>
          <Input type="text" placeholder="Tipo de quarto" label="Quarto" />
          <Input
            type="number"
            placeholder="Contagem de pessoas"
            label="Pessoas"
          />
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

          <Input
            type="number"
            placeholder="Número de quartos"
            label="Número de quartos"
          />
        </Form>

        <ContainerButtonModal>
          <Button
            buttonVariation="cancelModal"
            type="button"
            onClick={() => handleChangeFunction("modalCreateRoom", false)}
          >
            Cancelar
          </Button>
          <Button buttonVariation="saveModal" type="button">
            Adicionar
          </Button>
        </ContainerButtonModal>
      </div>
    </ContainerModal>
  );
};
