import styled from "styled-components";

export const StyledCardRoom = styled.div`
  display: flex;
  flex-direction: column;

  width: 230px;

  padding: 10px;

  gap: 5px;

  font-family: var(--font-family-inter);

  border-radius: 8px;

  border: 1px solid var(--grey-100, #d0d3d9);

  background: var(--grey-50);

  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);

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
      max-width: 185px;
      max-height: 20px;
      line-height: 24px;

      color: var(--grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
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

        color: var(--orange-600);
      }
    }
  }
`;
