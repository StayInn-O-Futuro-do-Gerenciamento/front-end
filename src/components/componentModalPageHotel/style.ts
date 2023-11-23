import styled from "styled-components";

export const ComponentModalPageHotelCreateStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;

  padding: 20px;

  font-family: var(--font-family-inter);

  background-color: white;

  border-radius: 16px;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
