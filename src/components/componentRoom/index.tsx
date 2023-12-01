import { useContext } from "react";
import { CardRoom } from "../componentCardRooms";
import { LoadingBaseStyle, StyledRoom } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const Room = () => {
  const { getTypeRoomState } = useContext(AppContext);
  const { t } = useTranslation(["room"]);
  if (!getTypeRoomState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"bubbles"}
          color={"var(--orange-400)"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
    );
  }
  if (getTypeRoomState.length === 0) {
    return (
      <StyledRoom>
        <h2>{t("noRoomsMessage")}</h2>
      </StyledRoom>
    );
  }

  return (
    <StyledRoom>
      <h3>{t("heading")}</h3>

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
