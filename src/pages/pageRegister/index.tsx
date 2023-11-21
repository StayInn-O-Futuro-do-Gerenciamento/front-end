import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";

interface iFormInput {
  usuario: string;
  senha: string;
}

export const PageRegister = () => {
  const { register, handleSubmit } = useForm<iFormInput>();

  const onSubmit = (data: iFormInput) => {
    console.log(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>
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
            Cadastrar
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
