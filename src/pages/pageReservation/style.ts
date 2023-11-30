import styled from "styled-components";

export const ReservationMain = styled.div`
  display: flex;

  .mainContet {
    width: 100%;
    position: relative;
    background-color: var(--grey-00);
  }
  .pageDiv {
    position: absolute;
    bottom: 17px;
    left: 20px;
    width: 400px;

    display: flex;
    justify-content: space-between;

    .pagination {
      font-family: var(--font-family-inter);
      font-size: 22px;
      font-weight: var(--text-weight600);
      margin: 8px 0;
      display: flex;
      justify-content: center;
      gap: 30px;
      cursor: pointer;
      list-style: none;
      padding: 0;
      width: 100%;
      li {
        padding: 0 8px;
        margin: 0 4px;
        border-radius: 4px;
        color: var(--grey-300);
        width: 40px;
        text-align: center;
      }

      .active {
        color: var(--orange-400);
        text-decoration: underline;
        /* border-bottom: 0.125rem solid var(--orange-400); */
      }
    }
    button {
      background-color: transparent;
      padding: 5px;
      border-radius: 10px;
      border: 1px solid var(--orange-500);
      width: auto;
      height: 44px;
      margin: 0 5px;
      img {
        width: 20px;
        height: 20px;
        filter: var(--svg-color-orange);
      }
    }
    button:disabled {
      background-color: var(--grey-100);
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;

export const LoadingBaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 350px;
  font-family: var(--font-family-inter);
  background-color: var(--grey-00);
  border-radius: var(--border-radius);
`;
