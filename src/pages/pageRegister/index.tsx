import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { ComponentModalPageLoginCreate } from "../../components/componentModalPageLoginCreate";
import { PageLoginStyle } from "./style";
import { Input } from "../../components/componentInput";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import { registerRegisterManagerSchemas } from "../../schemas/schemaRoom/schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(["modal"]);
  const onSubmit = (data: iFormInput) => {
    registerManager(data);
  };

  return (
    <PageLoginStyle>
      <ComponentModalPageLoginCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{t("register")} </h2>
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
          <Button buttonVariation="buttonCreate" type="submit">
            {t("register")}
          </Button>
        </form>
      </ComponentModalPageLoginCreate>
    </PageLoginStyle>
  );
};
