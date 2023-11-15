import styled from "styled-components";

export const StyledContainerModal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 15px;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  /* .modalGuest {
    width: 500px;
    padding: 30px;
    background-color: white;
  } */

  .modalUpdateRoom {
    width: 352px;
    height: 490px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
  }

  .modalUpdateGuest {
    width: 352px;
    height: 860px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
  }

  .modalRegisterGuest {
    width: 750px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
    height: 650px;

    .hospedeImage {
      display: flex;
      align-items: center;
      gap: 10px;

      .containerImage {
        width: 100px;
        height: 100px;
      }
    }
  }
  .formRegisterGuest {
    display: flex;
    height: 400px;
    width: 100%;
    gap: 30px;

    .guestData {
      width: 50%;
      height: 410px;
      overflow-y: auto;
    }

    .guestAddress {
      width: 50%;
    }
  }

  .modalPromotion {
    width: 650px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
    height: 500px;
  }
`;
