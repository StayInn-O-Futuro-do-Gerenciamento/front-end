import styled from "styled-components";

export const ComponentListGuestStyle = styled.div`
  position: relative;
  height: 90vh;
  .nav-controller-guest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    div:nth-child(1) {
      display: flex;
      gap: 20px;

      button {
        cursor: pointer;
        border: 1px solid var(--grey-300);
        padding: 7.5px 16px;
        color: var(--grey-300);
        border-radius: 100px;
        background-color: var(--grey-00);
        font-size: var(--font-size4);
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
    div:nth-child(2) {
      display: flex;
      gap: 20px;
      div {
        display: flex;
        align-items: center;
        padding: 10px;

        border-radius: 8px;
      }
      div:nth-child(2) {
        cursor: pointer;
        font-weight: var(--text-weight500);
        border-radius: 10px;
        color: var(--grey-00);
        background-color: var(--orange-500);
        border: 1px solid var(--orange-500);

        font-family: var(--font-family-inter);
        font-weight: var(--text-weight500);

        &:hover {
          background-color: var(--orange-50);
          color: var(--orange-500);
          border: 1px solid var(--orange-500);
        }
      }
      div:nth-child(1) {
        gap: 1px;
        padding: 0px 0px 0px 10px;
        border: 1px solid var(--orange-500);
        input {
          height: 100%;
          border: none;
          width: 100%;
          background-color: transparent;
        }
        input::placeholder {
          border: none;
        }
        input:focus {
          outline: none;
        }
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
