import styled from "styled-components";
import background from "../../assets/background-pages-dashboard.gif";

export const PageHotelStyle = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    input {
      height: 45px;
      background-color: #d9d9d9;
      padding: 0px 10px;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      width: 100% !important;
    }
    button {
      margin-top: 20px;
      height: 45px;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    label {
      width: 100%;
    }
  }
`;
