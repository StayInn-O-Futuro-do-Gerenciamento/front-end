import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px); // Adiciona um leve deslocamento para cima
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--grey-00);

  width: 396px;

  padding: 16px 16px 25px 16px;

  gap: 16px;

  border-radius: 8px;

  font-family: var(--font-family-inter);
  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
    color: var(--grey-grey-800);
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    gap: 16px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 364px;

      padding-bottom: 8px;

      border-bottom: 1px solid var(--grey-100);

      animation: ${fadeIn} 0.7s ease-in-out;

      .guest {
        display: flex;
        flex-direction: column;

        gap: 4px;

        p {
          font-size: var(--font-size2);
          font-weight: var(--text-weight500);
          color: var(--grey-grey-600);
        }

        span {
          font-size: var(--font-size2);
          font-weight: var(--text-weight500);
          color: var(--grey-grey-400);
        }
      }
    }
  }
`;
