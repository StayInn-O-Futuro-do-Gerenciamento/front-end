import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

interface iFormInput {
  name: string;
  password: string;
}

export const PageLogin = () => {
  const { loginUser, loadingButton } = useContext(AppContext);
  const { register, handleSubmit } = useForm<iFormInput>();

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
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            register={register("password")}
          />
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
