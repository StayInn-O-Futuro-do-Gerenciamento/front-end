import styled from "styled-components";

export const ReservationMain = styled.div`
  display: flex;
  .mainContet {
    width: 100%;
  }
  .pagination {
    margin: 8px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    list-style: none;
    padding: 0;
    li {
      padding: 12px;
      border: 1px solid #ccc;
      margin: 0 4px;
      border-radius: 4px;
    }

    .active {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
