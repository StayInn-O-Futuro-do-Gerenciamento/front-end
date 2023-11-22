import styled from "styled-components";

export const ComponentListGuestStyle = styled.div`
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

        &:hover {
          border: 1px solid var(--orange-500);
          color: var(--orange-500);
          background-color: var(--orange-50);
        }
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
        padding: 15px 19px;
        border-radius: 10px;
        color: var(--grey-00);
        background-color: var(--orange-500);
        border: 1px solid var(--orange-500);

        font-family: var(--font-family-inter);

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
`;
