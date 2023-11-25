import { useContext } from "react";
import { CardRoom } from "../componentCardRooms";
import { LoadingBaseStyle, StyledRoom } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";

export const Room = () => {
  const { getTypeRoomState } = useContext(AppContext);

  if (!getTypeRoomState || getTypeRoomState.length === 0) {
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
