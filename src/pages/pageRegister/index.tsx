import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import { registerRegisterManagerSchemas } from "../../schemas/schemaRoom/schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";

interface iFormInput {
  name: string;
  password: string;
}

export const PageRegister = () => {
  const { registerManager } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>({
    resolver: zodResolver(registerRegisterManagerSchemas),
  });

  const onSubmit = (data: iFormInput) => {
    registerManager(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
          <Input
            placeholder="Digite seu usuário"
            type="text"
            register={register("name")}
            label="Usuario"
          />
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            register={register("password")}
          />
          {errors.password ? (
            <span className="errorMessage">{errors.password.message}</span>
          ) : (
            <></>
          )}
          <Button buttonVariation="buttonCreate" type="submit">
            Cadastrar
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
