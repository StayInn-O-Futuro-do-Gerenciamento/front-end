import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { PageHotelStyle } from "./style";
import { Input } from "../../components/componentInput";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ComponentModalPageHotelCreate } from "../../components/componentModalPageHotel";
import { useNavigate } from "react-router-dom";

export const PageHotel = () => {
  const { createHotel, loadingButton, hotel } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  if (hotel) {
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
          <Input
            placeholder="Ex: Rua das alamedas"
            type="text"
            register={register("street")}
            label="Rua"
          />
          <Input
            placeholder="Ex: 234"
            type="text"
            register={register("number")}
            label="Número"
          />
          <Input
            placeholder="Ex: 07845-255"
            type="text"
            register={register("zipCode")}
            label="Cep"
          />
          <Input
            placeholder="Ex: Jaraguá"
            type="text"
            register={register("city")}
            label="Cidade"
          />
          <Input
            placeholder="Ex: Numero de quartos"
            type="number"
            register={register("numberRoomsTotal")}
            label="Numero total de quartos"
          />
          <Input
            placeholder="Ex: Quantidade de quartos por andar"
            type="number"
            register={register("roomsPerFloor")}
            label="Quantidade de quartos por andar"
          />
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
