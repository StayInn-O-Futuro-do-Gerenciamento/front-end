import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { PageHotelStyle } from "./style";
import { Input } from "../../components/componentInput";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ComponentModalPageHotelCreate } from "../../components/componentModalPageHotel";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerHotelSchemas,
  registerHotelData,
} from "../../schemas/schemaHotel";
import { useTranslation } from "react-i18next";

export const PageHotel = () => {
  const { createHotel, loadingButton, hotel } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerHotelData>({
    resolver: zodResolver(registerHotelSchemas),
  });

  const typeToken = localStorage.getItem("userType");
  const { t } = useTranslation(["modal"]);
  const navigate = useNavigate();

  if (
    hotel &&
    JSON.parse(typeToken!) === "Attendant" &&
    JSON.parse(typeToken!) === "Manager"
  ) {
    navigate("/");
  }

  const onSubmit = (data: any) => {
    createHotel(data);
  };

  return (
    <PageHotelStyle>
      <ComponentModalPageHotelCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{t("titleCreateHotel")} </h2>
          <Input
            placeholder={t("name")}
            type="text"
            register={register("name")}
            label={t("name")}
          />
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("street")}
            type="text"
            register={register("street")}
            label={t("street")}
          />
          {errors.street ? (
            <span className="errorMessage">{errors.street.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("number")}
            type="text"
            register={register("number")}
            label={t("number")}
          />
          {errors.number ? (
            <span className="errorMessage">{errors.number.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("zipCode")}
            type="text"
            register={register("zipCode")}
            label={t("zipCode")}
          />
          {errors.zipCode ? (
            <span className="errorMessage">{errors.zipCode.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("city")}
            type="text"
            register={register("city")}
            label={t("city")}
          />
          {errors.city ? (
            <span className="errorMessage">{errors.city.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("numberRoomsTotal")}
            type="number"
            register={register("numberRoomsTotal")}
            label={t("numberRoomsTotal")}
          />
          {errors.numberRoomsTotal ? (
            <span className="errorMessage">
              {errors.numberRoomsTotal.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            placeholder={t("roomsPerFloor")}
            type="number"
            register={register("roomsPerFloor")}
            label={t("roomsPerFloor")}
          />
          {errors.roomsPerFloor ? (
            <span className="errorMessage">{errors.roomsPerFloor.message}</span>
          ) : (
            <></>
          )}
          <Button
            className="button-submit"
            buttonVariation="buttonCreate"
            type="submit"
            disabled={loadingButton}
          >
            {loadingButton ? t("loading") : t("createHotel")}
          </Button>
        </form>
      </ComponentModalPageHotelCreate>
    </PageHotelStyle>
  );
};
