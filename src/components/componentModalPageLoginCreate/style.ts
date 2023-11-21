import styled from "styled-components";

export const ComponentModalPageLoginCreateStyle = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .button-change-page {
    position: absolute;
    background-color: transparent;
    color: var(--orange-400);
    padding: 5px;
    border-radius: 16px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    img {
      width: 60px;
    }
    p {
      font-size: 35px;
      color: var(--orange-400);
    }
  }
`;
