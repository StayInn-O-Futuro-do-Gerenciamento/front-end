import styled from "styled-components";

export const StyledCardRoom = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;

  gap: 5px;

  .outFipe {
    color: transparent;
  }

  .lowestPriceFipe {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 59px;
    height: 22px;

    font-size: 14px;
    font-weight: 500;
    font-family: sans-serif;

    background-color: var(--green-100);

    border-radius: 5px;

    color: var(--green-700);
  }

  .offer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  .infOffer {
    display: flex;
    flex-direction: column;

    gap: 5px;

    .pName {
      font-size: 16px;
      font-weight: 600;
      font-family: sans-serif;

      color: var(--grey-600);
    }

    .pOccupied {
      font-size: 18px;
      font-weight: 400;
      font-family: sans-serif;

      color: var(--grey-400);
      .occupied {
        font-size: 23px;
        font-weight: 600;
        font-family: sans-serif;

        color: var(--grey-600);
      }
    }

    .pPrice {
      font-size: 16px;
      font-weight: 4 00;
      font-family: sans-serif;

      color: var(--grey-400);

      span {
        font-size: 23px;
        font-weight: 600;
        font-family: sans-serif;

        color: var(--orange-400);
      }
    }
  }
`;
