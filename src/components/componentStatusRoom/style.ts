import styled from "styled-components";

export const StyledStatusRoom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-00);

  width: 100%;
  height: 236px;

  gap: 16px;

  padding: 20px 16px;

  border-radius: 15px;

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

      gap: 20px;

      .titleOccupied {
        display: flex;
        justify-content: space-between;

        gap: 82px;

        h5 {
          font-size: var(--font-size4);
          font-weight: var(--text-weight600);
          color: var(--grey-600);
        }
        span {
          font-size: var(--font-size4);
          font-weight: var(--text-weight600);
          color: var(--grey-600);
        }
      }

      .other {
        display: flex;
        justify-content: space-between;

        gap: 82px;
        p {
          font-size: var(--font-size4);
          font-weight: var(--text-weight400);
          color: var(--grey-400);
        }
        span {
          font-size: var(--font-size4);
          font-weight: var(--text-weight400);
          color: var(--grey-400);
        }
      }
    }
    .available {
      display: flex;
      flex-direction: column;

      gap: 20px;

      .titleAvailable {
        display: flex;
        justify-content: space-between;

        gap: 82px;

        h5 {
          font-size: var(--font-size4);
          font-weight: var(--text-weight600);
          color: var(--grey-600);
        }
        span {
          font-size: var(--font-size4);
          font-weight: var(--text-weight600);
          color: var(--grey-600);
        }
      }

      .other {
        display: flex;
        justify-content: space-between;

        gap: 82px;
        p {
          font-size: var(--font-size4);
          font-weight: var(--text-weight400);
          color: var(--grey-400);
        }
        span {
          font-size: var(--font-size4);
          font-weight: var(--text-weight400);
          color: var(--grey-400);
        }
      }
    }
  }
`;
