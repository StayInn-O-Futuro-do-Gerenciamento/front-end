import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerLoginSchemas } from "../../schemas/schemaLogin";

interface iFormInput {
  name: string;
  password: string;
}

export const PageLogin = () => {
  const { loginUser, loadingButton } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>({ resolver: zodResolver(registerLoginSchemas) });

  const onSubmit = (data: iFormInput) => {
    loginUser(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
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
          <Button
            buttonVariation="buttonCreate"
            type="submit"
            disabled={loadingButton}
          >
            {loadingButton ? "Carregando.." : "Efetuar Login"}
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
