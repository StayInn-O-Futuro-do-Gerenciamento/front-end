import styled from "styled-components";

export const StyledFeedback = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--grey-00);

  width: 396px;
  height: 340px;

  padding: 16px 16px 25px 16px;

  gap: 16px;

  border-radius: 8px;

  font-family: var(--font-family-inter);
  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
    color: var(--grey-grey-800);
    margin-bottom: 15px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
  }

  .swiper-wrapper {
    transition-duration: 0ms;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 364px;

    padding-bottom: 5px;

    border-bottom: 1px solid var(--grey-100);

    .guest {
      display: flex;
      flex-direction: column;

      gap: 4px;

      p {
        font-size: var(--font-size2);
        font-weight: var(--text-weight500);
        color: var(--grey-grey-600);
      }

      span {
        font-size: var(--font-size2);
        font-weight: var(--text-weight500);
        color: var(--grey-grey-400);
      }
    }
  }

  .estrela1 {
    color: var(--orange-300);
  }
  .estrela2 {
    color: var(--orange-300);
  }
`;
