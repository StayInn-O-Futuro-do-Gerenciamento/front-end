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
`;
