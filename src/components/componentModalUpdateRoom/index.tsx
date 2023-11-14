import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";

export const ModalUpdateRoom = () => {
  return (
    <ContainerModal>
      <div className="modalUpdateRoom">
        <HeaderModal>
          Atualizar quarto{" "}
          <Button type="button" buttonVariation="closeModal">
            X
          </Button>
        </HeaderModal>
        <Form>
          <Input
            type="number"
            label="Número do quarto"
            placeholder="0"
            defaultValue={0}
          />
          <Input
            type="text"
            label="Chave secreta"
            placeholder="default value"
          />
          <label className="labelSelect" htmlFor="">
            <strong>Disponibilidade</strong>
          </label>
          <select className="statusRoom" name="" id="">
            <option value="Disponivel">Disponível</option>
            <option value="Ocupado">Ocupado</option>
          </select>
          <label className="labelSelect" htmlFor="">
            <strong>Status</strong>
          </label>
          <select className="statusRoom" name="" id="">
            <option value="Limpo">Limpo</option>
            <option value="Sujo">Sujo</option>
            <option value="Manutenção">Manutenção</option>
          </select>
          <ContainerButtonModal>
            <Button type="button" buttonVariation="cancelModal">
              Cancelar
            </Button>
            <Button type="button" buttonVariation="saveModal">
              Salvar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
      ;
    </ContainerModal>
  );
};
