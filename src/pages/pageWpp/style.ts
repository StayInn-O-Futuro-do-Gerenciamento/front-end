import styled from "styled-components";

export const PageWppStyle = styled.div`
  display: flex;
  font-family: var(--font-family-inter);
  .mainContet {
    width: 100%;
    background: var(--grey-00);
  }
  .container-connect {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    .qrCodeImg {
      width: 350px;
    }
  }
`;
