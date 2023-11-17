import styled from "styled-components";

export const NavBarSearchStyle = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    width: 300px;
    background-color: var(--grey-50);
    padding: 10px;
    border-radius: 10px;
    max-height: 40px;
    gap: 10px;
    input {
      border: none;
      width: 100%;
      background-color: transparent;
    }
    input::placeholder {
      border: none;
    }
    input:focus {
      outline: none;
    }
  }
  div:nth-child(2) {
    display: flex;
    gap: 20px;
    img {
      cursor: pointer;
    }
  }
`;
