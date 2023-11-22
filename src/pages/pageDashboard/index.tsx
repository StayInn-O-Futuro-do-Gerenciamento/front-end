import { useContext } from "react";
import { BarChart } from "../../components/componentChartMain";
import { ReservationBar } from "../../components/componentCreateReservationBar";
import { Feedback } from "../../components/componentFeedBack";
import { NavBarSearch } from "../../components/componentNavBarSearch";
import { Room } from "../../components/componentRoom";
import { SemiCircularChart } from "../../components/componentSemiCircularChart";
import { Sidebar } from "../../components/componentSidebar";
import { StatusRoom } from "../../components/componentStatusRoom";
import { Overview } from "../../components/componenteOverview";
import { StyledContainerDashboard } from "./style";
import { AppContext } from "../../context/appContext";
import logo from "../../assets/sidebar/Logo.svg";
import { Input } from "../../components/componentInput";
import { useForm } from "react-hook-form";
import { Button } from "../../components/componentButton";
import { iHotel } from "../../context/appContext/type";

export const Dashboard = () => {
  const { hotel, loadingButton, createHotel } = useContext(AppContext);
  const { register, handleSubmit } = useForm<iHotel>();

  const onSubmit = (data: iHotel) => {
    createHotel(data);
  };

  return (
    <StyledContainerDashboard>
      {!hotel && (
        <div className="container-create-hotel">
          <div className="container-modal">
            <div>
              <h2>Oasis</h2>
              <img src={logo} alt="" />
            </div>
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
              <Button
                className="button-submit"
                buttonVariation="buttonCreate"
                type="submit"
                disabled={loadingButton}
              >
                {loadingButton ? "Carregando.." : "Criar hotel"}
              </Button>
            </form>
          </div>
        </div>
      )}
      <Sidebar />
      <div className="containerMain">
        <NavBarSearch />
        <ReservationBar />
        <div className="contentDashBoard">
          <Overview />
          <div className="infoRoomStatus">
            <Room />
            <StatusRoom />
          </div>
          <div className="informationChart">
            <BarChart />
            <div className="containerInfo">
              <SemiCircularChart />
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </StyledContainerDashboard>
  );
};
