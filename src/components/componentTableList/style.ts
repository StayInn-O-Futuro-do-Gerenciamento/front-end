import styled from "styled-components";

export const ComponentTableListStyle = styled.tbody`
  tr > td > img {
    cursor: pointer;
  }
  .firstNumber {
    font-weight: var(--text-weight700);
  }
  .status {
    border-radius: 16px;
    color: var(--blue-600);
    background-color: var(--blue-50);
    width: max-content;
    padding: 3px 8px 3px 8px;
  }
  .colum1 {
    display: none;
  }
  #colum1 {
    display: none;
  }
`;
