import styled from "styled-components";

export const PageWppStyle = styled.div`
  display: flex;
  font-family: var(--font-family-inter);
  color: var(--grey-700);

  .mainContet {
    width: 100%;
    background: var(--grey-00);
  }
  .container-connect {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

    .qrcode {
      width: 350px;
      height: 350px;

      border: 1px solid transparent;
      border-radius: 20px;

      overflow: hidden;

      .qrCodeImg {
        width: 350px;
      }
    }

    .div1 {
      display: flex;
      flex-direction: column;
      gap: 20px;

      div {
        display: flex;
        flex-direction: column;
        gap: 15px;

        font-size: var(--font-size4);
      }

      button {
        width: 185px;
        height: 50px;

        font-size: var(--font-size4);

        color: var(--grey-button-00);
      }
    }
  }
`;
