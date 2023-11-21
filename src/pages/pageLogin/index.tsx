import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";

interface iFormInput {
  usuario: string;
  senha: string;
}

export const PageLogin = () => {
  const { register, handleSubmit } = useForm<iFormInput>();

  const onSubmit = (data: iFormInput) => {
    console.log(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input
            placeholder="Digite seu usuário"
            type="text"
            register={register("usuario")}
            label="Usuario"
          />
          ,
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            register={register("senha")}
          />
          <Button buttonVariation="buttonCreate" type="submit">
            Efetuar Login
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
