import styled from "styled-components";

export const StyledFilterPromotion = styled.div`
  width: 1000px;
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
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 1000px;
    font-family: var(--font-family-inter);
    font-weight: var(--text-weight500);
    border-radius: var(--border-radius);
    border-right: 1px solid #e8f1fd;
    border-left: 1px solid #e8f1fd;
    overflow: hidden;
  }

  thead {
    background-color: #f7f9fc;
    /* border-top: 1px solid #e8f1fd; */
  }
  td {
    font-size: 12px;
    border-bottom: 1px solid #e8f1fd;
    padding: 12px;
  }

  tbody {
    font-size: var(--font-size2);
    color: var(--grey-600);

    .statusColor {
      display: flex;
      justify-content: space-between;
      p {
        border-radius: 16px;
        color: var(--blue-600); /* Substitua isso pelo valor de cor desejado */
        background-color: var(--blue-50);
        width: max-content;
        padding: 2px 8px 2px 8px;
      }
    }
  }
`;
