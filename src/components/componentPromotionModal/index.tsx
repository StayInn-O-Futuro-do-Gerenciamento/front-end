import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";

export const ModalPromotion = () => {
  return (
    <ContainerModal>
      <div className="modalPromotion">
        <HeaderModal>
          Adicionar promoção
          <Button buttonVariation="closeModal" type="button">
            X
          </Button>
        </HeaderModal>
        <Form>
          <Input type="text" label="Nome" placeholder="Nome da oferta" />
          <label>
            <strong>Descrição</strong>
          </label>
          <textarea placeholder="Descrição da oferta"></textarea>
          <Input type="number" label="Desconto" placeholder="0%" />
          <Input type="date" label="Data de início" />
          <Input type="date" label="Data de término" />

          <label className="labelSelect" htmlFor="">
            <strong>Tipo de quarto</strong>
          </label>
          <select name="" id="">
            <option value="" disabled selected>
              Selecionar tipo
            </option>
            <option value="">Vip</option>
            <option value="">Bom</option>
            <option value="">Ruim</option>
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
    </ContainerModal>
  );
};
