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
    padding: 20px;
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
  .offer {
    height: 45px;

    color: var(--grey-00);

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
`;
