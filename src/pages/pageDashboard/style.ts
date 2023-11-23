import styled from "styled-components";

export const StyledContainerDashboard = styled.div`
  display: flex;
  overflow: hidden;

  max-width: 100%;

  .containerMain {
    width: 90%;
    padding-left: 20px;
  }

  .container-create-hotel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: black;
    position: fixed;
    z-index: 1000;
    .button-submit {
      margin-top: 20px;
    }
    .container-modal {
      width: 500px;
      background-color: white;
      border-radius: 16px;
      padding: 20px;
      div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
          color: var(--orange-400);
        }
      }
    }
  }

  .contentDashBoard {
    background-color: #eef0f2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 100%;
    border-radius: 16px;

    .infoRoomStatus {
      display: flex;
      gap: 20px;
    }

    .informationChart {
      width: 100%;
      display: flex;
      gap: 20px;

      .containerInfo {
        display: flex;
        flex-direction: row;
        gap: 20px;

        .InfoFeedChart {
          display: flex;
          gap: 20px;
        }
      }
    }
  }
`;
