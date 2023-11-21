import styled from "styled-components";

export const ComponentAddRoomStyle = styled.div`
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    align-items: center;
    div:nth-child(1) {
      display: flex;
      gap: 10px;
    }

    .selected-btn {
      border: 1px solid var(--orange-500);
      color: var(--orange-500);
      background-color: var(--orange-50);
    }
  }
`;
