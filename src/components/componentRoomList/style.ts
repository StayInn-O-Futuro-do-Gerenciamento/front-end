import styled from "styled-components";

export const RoomFilteredListStyled = styled.div`
  margin: 0 auto; // remover depois
  width: 1020px;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: var(--border-radius);
    overflow: hidden;
    font-family: var(--font-family-inter);
    font-weight: var(--text-weight500);
    border: 1px solid #e8f1fd;
    .room-number {
      font-weight: var(--text-weight700);
    }
    .status {
      border-radius: 16px;
      color: var(--blue-600);
      background-color: var(--blue-50);
      width: max-content;
      padding: 3px 8px 3px 8px;
    }
    th {
      padding: 24px 10px;
      text-align: start;
      background: #f7f9fc;
    }
    tr:hover {
      background-color: #f7f9fc;
    }
    td {
      padding: 24px 20px;
      border-bottom: 1px solid #e8f1fd;

      img {
        cursor: pointer;
      }
    }
  }
`;
