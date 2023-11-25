import { useContext } from "react";
import More from "../../assets/More.svg";
import { LoadingBaseStyle, StyledFeedback } from "./style";
import { AppContext } from "../../context/appContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReactLoading from "react-loading";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export const Feedback = () => {
  const { getReservationState } = useContext(AppContext);

  if (!getReservationState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"bubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }

  return (
    <StyledFeedback>
      <div className="title">
        <h3>Feedback</h3>
        <img src={More} alt="Mais detalhes" />
      </div>
      <Swiper
        modules={[Autoplay]}
        direction={"vertical"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        loop={true}
      >
        {getReservationState.map((item: any, index: any) => (
          <SwiperSlide key={index} style={{ height: 60.5 }}>
            <div className="guest">
              <p style={{ marginTop: 5 }}>{item.guests[0].name}</p>
              <span>
                {/* Renderizar ícones de estrelas com base no número de estrelas */}
                {[...Array(item.feedBack)].map((_, i) => (
                  <FaStar className="estrela1" key={i} />
                ))}
                {[...Array(5 - item.feedBack)].map((_, i) => (
                  <FaRegStar className="estrela2" key={i} />
                ))}
              </span>
            </div>
            <p>{item.rooms.roomNumber}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledFeedback>
  );
};
