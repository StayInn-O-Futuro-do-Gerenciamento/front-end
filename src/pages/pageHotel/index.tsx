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
          <h2>Criar um hotel</h2>
          <Input
            placeholder="Digite nome do Hotel"
            type="text"
            register={register("name")}
            label="Hotel"
          />
          {errors.name ? (
            <span className="errorMessage">{errors.name.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: Rua das alamedas"
            type="text"
            register={register("street")}
            label="Rua"
          />
          {errors.street ? (
            <span className="errorMessage">{errors.street.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: 234"
            type="text"
            register={register("number")}
            label="Número"
          />
          {errors.number ? (
            <span className="errorMessage">{errors.number.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: 07845-255"
            type="text"
            register={register("zipCode")}
            label="Cep"
          />
          {errors.zipCode ? (
            <span className="errorMessage">{errors.zipCode.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: Jaraguá"
            type="text"
            register={register("city")}
            label="Cidade"
          />
          {errors.city ? (
            <span className="errorMessage">{errors.city.message}</span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: Numero de quartos"
            type="number"
            register={register("numberRoomsTotal")}
            label="Numero total de quartos"
          />
          {errors.numberRoomsTotal ? (
            <span className="errorMessage">
              {errors.numberRoomsTotal.message}
            </span>
          ) : (
            <></>
          )}
          <Input
            placeholder="Ex: Quantidade de quartos por andar"
            type="number"
            register={register("roomsPerFloor")}
            label="Quantidade de quartos por andar"
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
            {loadingButton ? "Carregando.." : "Criar hotel"}
          </Button>
        </form>
      </ComponentModalPageHotelCreate>
    </PageHotelStyle>
  );
};
