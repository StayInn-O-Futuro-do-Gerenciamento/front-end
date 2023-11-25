import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-00);

  padding: 16px 25px;

  width: 60%;

  border-radius: 15px;

  font-family: var(--font-family-inter);
  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
    color: var(--grey-700);
  }

  gap: 15px;

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    padding-right: 85px;
  }

  .swiper-pagination-bullets > span {
    background-color: var(--orange-600);
  }

  .swiper-slide {
    background: var(--grey-00);
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  .swiper-wrapper {
    display: flex;
    gap: 15px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--grey-300);
  }
`;

export const LoadingBaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-inter);
  background-color: var(--grey-00);
  border-radius: var(--border-radius);
  width: 60%;
  height: 230px;
  padding-top: 75px;
`;
