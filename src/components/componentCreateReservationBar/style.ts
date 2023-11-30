import styled from "styled-components";

export const StyledReservationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px 10px 20px;
  background-color: var(--grey-00);

  .containerDateHour {
    width: 50%;

    .dateHour {
      font-family: var(--font-family-inter);
      font-size: var(--font-size2);
      font-weight: var(--text-weight500);
      color: var(--grey-600);
    }
  }
  .cResevation {
    height: 40px;

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
`;
