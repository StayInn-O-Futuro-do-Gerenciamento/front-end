import styled from "styled-components";

export const StyledFilterPromotion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  height: 90vh;

  .containerContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
  }
  .buttonContainer {
    display: flex;
    gap: 10px;

    button {
      cursor: pointer;
      border: 1px solid var(--grey-300);
      padding: 11.5px 16px;
      color: var(--grey-700);
      border-radius: 100px;
      background-color: var(--grey-inputBack-00);
      font-size: var(--font-size2);
      font-weight: var(--text-weight500);
      &:hover {
        border: 1px solid var(--orange-500);
        color: var(--orange-500);
        background-color: var(--orange-50);
      }
    }

    .selected-btn {
      border: 1px solid var(--orange-500);
      color: var(--orange-500);
      background-color: var(--orange-50);
    }
  }
  .offer {
    height: 45px;

    color: var(--grey-button-00);

    font-family: var(--font-family-inter);
    font-size: var(--font-size4);
    font-weight: var(--text-weight500);

    border: 1px solid var(--orange-500);
    border-radius: 10px;

    background-color: var(--orange-500);

    &:hover {
      border: 1px solid var(--orange-500);
      color: var(--orange-500);
      background-color: var(--orange-50);
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
  width: 100%;
  height: 90vh;
`;
