import { Button } from "../componentButton";
import { ContainerModal } from "../componentContainerModal";
import { HeaderModal } from "../componentHeaderModal";

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
      </div>
    </ContainerModal>
  );
};
