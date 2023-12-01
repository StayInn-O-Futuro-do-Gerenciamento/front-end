import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerLoginSchemas } from "../../schemas/schemaLogin";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(["modal"]);
  const onSubmit = (data: iFormInput) => {
    loginUser(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input
            placeholder={t("user")}
            type="text"
            register={register("name")}
            label={t("user")}
          />
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            label={t("password")}
            placeholder={t("password")}
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
            {loadingButton ? t("loading") : t("login")}
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
