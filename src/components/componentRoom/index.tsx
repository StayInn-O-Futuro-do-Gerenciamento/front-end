import { useContext } from "react";
import { CardRoom } from "../componentCardRooms";
import { StyledRoom } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AppContext } from "../../context/appContext";

export const Room = () => {
  const { getTypeRoomState } = useContext(AppContext);

  return (
    <StyledRoom>
      <h3>Quartos</h3>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={false}
        slidesPerView={4}
      >
        {getTypeRoomState &&
          getTypeRoomState.map((value: any, index: any) => (
            <SwiperSlide key={index}>
              <CardRoom quartos={value} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledRoom>
  );
};
