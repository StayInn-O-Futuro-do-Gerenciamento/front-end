import styled from "styled-components";

export const StyledFilterPromotion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .containerContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .buttonContainer {
    display: flex;
    gap: 10px;

    .selected-btn {
      border: 1px solid var(--orange-500);
      color: var(--orange-500);
      background-color: var(--orange-50);
    }
  }
`;
