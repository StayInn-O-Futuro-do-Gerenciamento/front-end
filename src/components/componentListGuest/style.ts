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
        border-radius: 16px;
        padding: 10px;
      }
    }
    div:nth-child(2) {
      display: flex;
      gap: 20px;
      div {
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid black;
        border-radius: 8px;
      }
      div:nth-child(1) {
        cursor: pointer;
      }
      div:nth-child(2) {
        gap: 1px;
        padding: 0px 0px 0px 10px;
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
  table {
    width: 100%;
    background-color: gray;
    border-collapse: collapse;

    thead {
      background-color: gray;
      border: none;
    }
    tr {
      border: none;
      background-color: var(--grey-00);
    }
    th {
      border: none;
      background-color: #f7f9fc;
      text-align: start;
      padding: 15px;
      font-weight: 500;
      color: var(--grey-500);
    }
    td {
      padding: 15px;
      border-bottom: 1px solid var(--blue-50);
    }
  }
`;
