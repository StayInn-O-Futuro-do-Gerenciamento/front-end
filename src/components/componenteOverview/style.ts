import styled from "styled-components";

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 16px 20px;

  width: 1020px;
  height: 135px;

  border-radius: 15px;

  font-family: var(--font-family-inter);

  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
  }

  .infoHotel {
    display: flex;
    justify-content: space-between;
  }

  .infos {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    gap: 10px;

    width: auto;
    height: auto;

    span {
      font-size: 26px;
      color: var(--orange-600);
      font-weight: 600;
    }
  }

  .infoDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 5px;

    span {
      font-size: 14px;
      color: var(--grey-400);
      font-weight: 400;
    }

    p {
      font-size: 16px;
      color: var(--grey-600);
      font-weight: 600;
    }
  }
`;
