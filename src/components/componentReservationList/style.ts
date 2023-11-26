import styled from "styled-components";

export const ComponentListReservationStyle = styled.div`
  position: relative;
  height: 90vh;
  div {
    padding: 15px 10px;
    div:nth-child(1) {
      display: flex;
      gap: 10px;
      justify-content: end;
      button:nth-child(2) {
        display: flex;
        align-items: center;
      }
    }
  }
  .pagination {
    position: absolute;
    bottom: 4px;
    left: 20px;
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
    li {
      padding: 0 8px;
      margin: 0 4px;
      border-radius: 4px;
    }
    button {
      background-color: transparent;
      padding: 5px;
      border-radius: 10px;
      border: 1px solid var(--orange-500);
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

    .active {
      color: var(--orange-400);
      border-bottom: 0.125rem solid var(--orange-400);
    }
  }
`;

export const LoadingBaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  font-family: var(--font-family-inter);
  height: 90vh;
`;
