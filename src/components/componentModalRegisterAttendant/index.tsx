import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { registerAttendantSchemas } from "../../schemas/schemaAttendant";
import { Button } from "../componentButton";
import { ContainerButtonModal } from "../componentContainerButtonModal";
import { ContainerModal } from "../componentContainerModal";
import { Form } from "../componentForm";
import { HeaderModal } from "../componentHeaderModal";
import { Input } from "../componentInput";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalRegisterAttendat = () => {
  const { createAttendant, handleChangeFunction } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(registerAttendantSchemas),
  });

  const onSubmit = (data: any) => {
    createAttendant(data);
  };

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome do atendente"
            label="Nome"
            register={register("name")}
          />
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            type="text"
            placeholder="Senha do atendente"
            label="Senha"
            register={register("password")}
          />
          {errors.password ? (
            <span className="errorMessage">{errors.password.message}</span>
          ) : (
            <></>
          )}
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
            <Button type="submit" buttonVariation="saveModal">
              Cadastrar
            </Button>
          </ContainerButtonModal>
        </Form>
      </div>
    </ContainerModal>
  );
};
