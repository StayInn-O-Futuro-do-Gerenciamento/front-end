import styled from "styled-components";

export const SemiCircularChartMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 16px;
  font-family: var(--font-family-inter);
  background-color: var(--grey-00);
  border-radius: var(--border-radius);
  width: 396px;
  height: 340px;

  h3 {
    font-size: var(--font-size3);
    color: var(--grey-700);
    font-weight: var(--text-weight500);
  }

  .div-subtitle {
    display: flex;
    flex-direction: row;
    gap: 20px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      p {
        font-weight: var(--text-weight600);
        font-size: 18px;
        color: var(--grey-700);
      }
      .orange-point {
        width: 10px;
        height: 10px;
        background-color: var(--orange-400);
        border-radius: 50%;
      }
      .grey-point {
        width: 10px;
        height: 10px;
        background-color: var(--grey-100);
        border-radius: 50%;
      }
    }
  }
`;

export const LoadingBaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  font-family: var(--font-family-inter);
  background-color: #fff;
  border-radius: var(--border-radius);
  width: 396px;
  height: 340px;
`;
