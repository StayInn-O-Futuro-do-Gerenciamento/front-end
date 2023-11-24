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
  z-index: 3;

  /* .modalGuest {
    width: 500px;
    padding: 30px;
    background-color: white;
  } */

  .modalUpdateRoom {
    width: 352px;
    height: 400px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
  }

  .modalUpdateGuest {
    width: 750px;
    height: 550px;
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

  .formUpdateGuest {
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
    width: 400px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
    height: 700px;
  }
  select {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    font-family: var(--font-family-inter);
    border-radius: var(--border-radius);
    border-color: var(--grey-200);
  }

  .modalAddRoom {
    width: 352px;
    padding: 16px;
    background-color: var(--grey-00);
    border-radius: var(--border-radius);
  }

  .modalUpdateTypeRoom,
  .modalAddAttendat,
  .modalUpdateHotel,
  .modalScheduleReservation {
    width: 352px;
    padding: 16px;
    background-color: var(--grey-00);
    border-radius: var(--border-radius);
  }
`;
