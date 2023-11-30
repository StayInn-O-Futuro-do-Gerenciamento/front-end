import styled from "styled-components";

export const TableStyled = styled.table`
  font-family: var(--font-family-inter);
  width: 98%;
  margin: 0 20px;
  background-color: gray;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: var(--border-radius);
  border-top: 1px solid var(--grey-700);
  border-right: 1px solid var(--grey-700);
  border-left: 1px solid var(--grey-700);
  overflow: hidden;

  thead {
    background-color: var(--grey-00);
    border: none;
  }
  tr {
    border: none;
    background-color: var(--grey-00);
  }
  th {
    border: none;
    background-color: var(--grey-50);
    text-align: start;
    padding: 15px;
    font-weight: 500;
    color: var(--grey-700);
  }
  td {
    padding: 15px;
    border-bottom: 1px solid var(--grey-700);
    color: var(--grey-700);

    img {
      cursor: pointer;
    }
  }

  .firstNumber {
    font-weight: var(--text-weight700);
  }
  .estrela1 {
    color: var(--orange-300);
  }
  .estrela2 {
    color: var(--orange-300);
  }
`;
