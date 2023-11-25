import styled from "styled-components";

export const FilterMain = styled.section`
  margin: 20px 20px;
  display: flex;
  flex-direction: column; //Mudanças da imagen
  gap: 15px; //Mudanças da imagen
  width: 98%;
  padding: 32px;
  font-family: var(--font-family-inter);
  border-radius: 10px;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);

  .back {
    //Mudanças da imagen
    width: 36px;
    height: 36px;
    padding: 5px;
    background-color: var(--svg-color-grey2);
    border: 2px solid var(--orange-500);
    border-radius: 10px;
    cursor: pointer;
    filter: var(--svg-color-grey1);
  }
  .filterContent {
    display: flex; //Mudanças da imagen
    justify-content: space-between; //Mudanças da imagen
    align-items: center; //Mudanças da imagen
    .filter {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .filter-types {
        display: flex;
        gap: 12px;
        li {
          cursor: pointer;
          border: 1px solid var(--grey-300);
          padding: 7.5px 16px;
          color: var(--grey-700);
          border-radius: 100px;
          background-color: var(--grey-inputBack-00);
          font-size: var(--font-size5);

          &:hover {
            border: 1px solid var(--orange-500);
            color: var(--orange-500);
            background-color: var(--orange-50);
            font-size: var(--font-size5);
          }
        }
        .selected-btn {
          border: 1px solid var(--orange-500);
          color: var(--orange-500);
          background-color: var(--orange-50);
          font-size: var(--font-size5);
        }
      }
      .filter-forms {
        display: flex;
        gap: 32px;
        div {
          display: flex;
          flex-direction: column;
          gap: 6px;
          label {
            font-size: 14px;
            font-weight: var(--text-weight600);
            color: var(--grey-800);
          }
          input {
            padding: 12px 22px;
            border-radius: 10px;
            border: 2px solid var(--grey-200);
            outline: 0;
            background: var(--grey-inputBack-00);
            color: var(--grey-700);
          }
        }
      }
      .filter-peoples {
        display: flex;
        gap: 32px;

        div {
          display: flex;
          align-items: center;
          .filter-name {
            margin-right: 32px;
            font-size: 14px;
            font-weight: var(--text-weight600);
            color: var(--grey-800);
          }
          .filter-number {
            font-weight: var(--text-weight700);
            color: var(--grey-800);
          }

          button {
            width: 28px;
            height: 28px;
            border-radius: 100%;
            font-size: 20px;
            margin: 0 14px;
            padding-bottom: 7px;
            text-align: center;
            background-color: var(--orange-50);
            color: var(--orange-500);

            &:hover {
              background-color: var(--orange-500);
              color: var(--orange-50);
            }
          }
        }
      }
    }
    .check-rooms {
      padding: 15px 19px;
      border-radius: 10px;
      color: var(--grey-button-00);
      background-color: var(--orange-500);
      font-size: 16px;
      &:hover {
        background-color: var(--orange-50);
        color: var(--orange-500);
        border: 2px solid var(--orange-500);
      }
    }
  }
`;
