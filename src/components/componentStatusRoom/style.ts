import styled from "styled-components";

export const StyledStatusRoom = styled.div`
  display: flex;
  flex-direction: column;

  width: 604px;
  height: 206px;

  gap: 16px;

  font-family: var(--font-family-inter);
  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
  }

  .container {
    display: flex;
    justify-content: space-between;

    .occupied {
      display: flex;
      flex-direction: column;

      gap: 8px;

      div {
        display: flex;
        justify-content: space-between;
        gap: 82px;

        h5 {
          font-size: var(--font-size3);
          font-weight: var(--text-weight600);
        }

        p {
          font-size: var(--font-size1);
          font-weight: var(--text-weight600);
        }
      }
    }
    .available {
      display: flex;
      flex-direction: column;
    }
  }
`;
