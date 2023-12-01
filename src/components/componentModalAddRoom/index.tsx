import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { tAddRoomData, addRoomSchemas } from "../../schemas/schemaRoom";
import { useTranslation } from "react-i18next";

export const ModalAddRoom = () => {
  const { handleChangeFunction, createRoom } = useContext(AppContext);
  const { t } = useTranslation(["modal"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tAddRoomData>({
    resolver: zodResolver(addRoomSchemas),
  });

  const onSubmit = (data: tAddRoomData) => {
    data.typeRoom.price = Number(data.typeRoom.price);
    data.typeRoom.roomTypeQuantity = Number(data.typeRoom.roomTypeQuantity);
    data.typeRoom.personCount = Number(data.typeRoom.personCount);
    createRoom(data);
  };

  return (
    <ContainerModal>
      <div className="modalAddRoom">
        <HeaderModal>
          {t("addRoom")}
          <Button
            type="button"
            buttonVariation="closeModal"
            onClick={() => handleChangeFunction("modalCreateRoom", false)}
          >
            X
          </Button>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="partirForm">
            <div className="div1">
              <Input
                type="text"
                placeholder="Ex: vip"
                label={t("roomTypeLabel")}
                register={register("typeRoom.name")}
              />
              {errors.typeRoom?.name ? (
                <span className="errorMessage">
                  {errors.typeRoom?.name.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                type="text"
                placeholder={t("descriptionLabel")}
                label={t("descriptionLabel")}
                register={register("typeRoom.description")}
              />
              {errors.typeRoom?.description ? (
                <span className="errorMessage">
                  {errors.typeRoom?.description.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                type="text"
                placeholder="Ex: frigobar, hidromassagem"
                label={t("confortLabel")}
                register={register("typeRoom.confort")}
              />
              {errors.typeRoom?.confort ? (
                <span className="errorMessage">
                  {errors.typeRoom?.confort.message}
                </span>
              ) : (
                <></>
              )}
              <label>
                <strong>{t("statusLabel")}</strong>
              </label>
              <select {...register("status")} name="status">
                <option disabled selected>
                  {t("selectStatus")}
                </option>
                <option value="Limpo">{t("cleanStatus")}</option>
                <option value="Sujo">{t("dirtyStatus")}</option>{" "}
                <option value="Em Manutenção">{t("maintenanceStatus")}</option>
              </select>
              {errors.status ? (
                <span className="errorMessage">{errors.status.message}</span>
              ) : (
                <></>
              )}
            </div>
            <div className="div2">
              <Input
                type="number"
                placeholder={t("priceLabel")}
                label={t("priceLabel")}
                register={register("typeRoom.price")}
              />
              {errors.typeRoom?.price ? (
                <span className="errorMessage">
                  {errors.typeRoom?.price.message}
                </span>
              ) : (
                <></>
              )}
              <Input
                type="number"
                placeholder={t("peopleCountLabel")}
                label={t("peopleCountLabel")}
                register={register("typeRoom.personCount")}
              />
              {errors.typeRoom?.personCount ? (
                <span className="errorMessage">
                  {errors.typeRoom?.personCount.message}
                </span>
              ) : (
                <></>
              )}

              <Input
                type="number"
                placeholder={t("roomQuantityLabel")}
                label={t("roomQuantityLabel")}
                register={register("typeRoom.roomTypeQuantity")}
              />
              {errors.typeRoom?.roomTypeQuantity ? (
                <span className="errorMessage">
                  {errors.typeRoom?.roomTypeQuantity.message}
                </span>
              ) : (
                <></>
              )}
              <label>
                <strong>{t("cancelPolicyLabel")}</strong>
              </label>
              <select {...register("typeRoom.rate")} name="rate">
                {/* <option disabled selected>
              Selecionar política
            </option> */}
                <option value="Flexível">{t("flexiblePolicy")}</option>
                <option value="Restrito">{t("restrictedPolicy")}</option>{" "}
                <option value="Sem Reembolso">{t("noRefundPolicy")}</option>
              </select>

              {errors.typeRoom?.rate ? (
                <span className="errorMessage">
                  {errors.typeRoom.rate.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>

          <ContainerButtonModal>
            <Button
              buttonVariation="cancelModal"
              type="button"
              onClick={() => handleChangeFunction("modalCreateRoom", false)}
            >
              {t("btnCancel")}
            </Button>
            <Button buttonVariation="saveModal" type="submit">
              {t("btnAdd")}
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
