import styled from "styled-components";

export const TableStyled = styled.table`
  font-family: var(--font-family-inter);
  width: 98%;
  margin: 0 20px;
  background-color: gray;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: var(--border-radius);
  border-right: 1px solid #e8f1fd;
  border-left: 1px solid #e8f1fd;
  overflow: hidden;

  thead {
    background-color: gray;
    border: none;
  }
  tr {
    border: none;
    background-color: var(--grey-00);
  }
  th {
    border: none;
    background-color: #f7f9fc;
    text-align: start;
    padding: 15px;
    font-weight: 500;
    color: var(--grey-500);
  }
  td {
    padding: 15px;
    border-bottom: 1px solid var(--blue-50);
    img {
      cursor: pointer;
    }
  }

  .firstNumber {
    font-weight: var(--text-weight700);
  }
  /* .status {
    
  } */
`;
