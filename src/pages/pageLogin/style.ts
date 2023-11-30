import styled from "styled-components";
import background from "../../assets/background-pages-dashboard.gif";

export const PageLoginStyle = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    background-color: var(--grey-00);
    form {
      background-color: var(--grey-00);
      input {
        height: 60px;
        background-color: var(--grey-50);
        padding: 0px 10px;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        width: 100% !important;
        color: var(--grey-700);
      }
      button {
        margin-top: 20px;
        height: 60px;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      label {
        width: 100%;
        color: var(--grey-900);
      }
    }
    h2 {
      color: var(--grey-700);
    }
    p {
      color: var(--grey-700);
    }
  }
`;
