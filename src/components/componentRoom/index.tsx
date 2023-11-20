import React from "react";
import { CardRoom } from "../componentCardRooms";
import { StyledRoom } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Room = () => {
  const quartos = [
    {
      oferta: true,
      nome: "Quarto Standard",
      quantidadeTotal: 50,
      ocupados: 20,
      precoPorDia: 100.0,
    },
    {
      oferta: false,
      nome: "Suíte Deluxe",
      quantidadeTotal: 20,
      ocupados: 5,
      precoPorDia: 200.0,
    },
    {
      oferta: true,
      nome: "Quarto Familiar",
      quantidadeTotal: 30,
      ocupados: 10,
      precoPorDia: 150.0,
    },
    {
      oferta: true,
      nome: "Suíte Executiva",
      quantidadeTotal: 15,
      ocupados: 3,
      precoPorDia: 250.0,
    },
    {
      oferta: false,
      nome: "Quarto Econômico",
      quantidadeTotal: 40,
      ocupados: 15,
      precoPorDia: 80.0,
    },
    {
      oferta: false,
      nome: "Quarto Econômico",
      quantidadeTotal: 40,
      ocupados: 15,
      precoPorDia: 80.0,
    },
    {
      oferta: false,
      nome: "Quarto Econômico",
      quantidadeTotal: 40,
      ocupados: 15,
      precoPorDia: 80.0,
    },
  ];

  return (
    <StyledRoom>
      <h3>Quartos</h3>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={false}
        slidesPerView={4}
        // pagination={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
      >
        {quartos.map((value, index) => (
          <SwiperSlide key={index}>
            <CardRoom quartos={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledRoom>
  );
};
