import styled from "styled-components";

export const SemiCircularChartMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  font-family: var(--font-family-inter);
  background-color: #fff;
  border-radius: var(--border-radius);
  width: 396px;
  height: 340px;

  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight500);
    margin-bottom: 120px;
  }
  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
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
  }
`;
