import styled from "styled-components";

export const ComponentModalPageLoginCreateStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 570px;

  padding: 20px;

  font-family: var(--font-family-inter);

  background-color: white;

  border-radius: 16px;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .errorMessage {
      font-size: var(--font-size2);
      color: var(--red-600);
    }
  }

  h2 {
    display: flex;
    justify-content: center;

    font-family: var(--font-family-inter);
    font-weight: var(--text-weight400);

    margin-top: 40px;
  }

  strong {
    font-family: var(--font-family-inter);
    font-weight: var(--text-weight600);
    font-size: var(--font-size4);
  }

  input {
    height: 55px;
  }

  input:focus {
    backgroud-color: blue;
  }
  input::placeholder {
    font-size: var(--font-size4);
  }

  .button-change-page {
    position: absolute;
    background-color: transparent;
    color: var(--orange-400);
    padding: 5px;
    border-radius: 16px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    img {
      width: 60px;

      filter: var(--svg-color-orange);
    }
    p {
      font-size: 35px;

      color: var(--orange-400);
    }
  }
  .direitos {
    margin: 0 auto;
  }
`;
