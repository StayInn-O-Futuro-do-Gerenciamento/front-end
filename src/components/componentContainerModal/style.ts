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
    height: 320px;
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
    padding: 10px 15px 20px 15px;

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
    padding: 10px 10px;
    width: 100%;
    gap: 30px;

    .guestData {
      width: 50%;
      height: 450px;
      padding: 0 10px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--orange-400);
        border-radius: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: var(--grey-50);
      }
      h5 {
        margin-top: 8px;
      }
      .emergencyContacts {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;

        .contactBase {
          margin-top: 15px;
          padding: 8px 6px;
          background-color: var(--orange-00);
          border: 2px solid var(--orange-400);
          color: var(--orange-600);
          border-radius: 10px;

          &:hover {
            background-color: var(--orange-400);
            border: 2px solid var(--orange-50);
            color: var(--orange-50);
          }
        }
        .contactBase:last-child {
          margin-bottom: 20px;
        }
        .removeContact {
          margin-top: 10px;
          padding: 8px 6px;
          background-color: var(--red-50);
          border: 2px solid var(--red-400);
          color: var(--red-600);
          border-radius: 10px;

          &:hover {
            background-color: var(--red-400);
            border: 2px solid var(--red-50);
            color: var(--red-50);
          }
        }
      }
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
    width: 750px;
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

  .modalUpdateTypeRoom {
    width: 750px;
  }

  .partirForm {
    display: flex;
    gap: 20px;
    .div1,
    .div2 {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }
`;
