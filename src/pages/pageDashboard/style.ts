import styled from "styled-components";

export const StyledContainerDashboard = styled.div`
  display: flex;
  overflow: hidden;

  .containerMain {
    width: 100%;
    padding-left: 20px;
  }

  .contentDashBoard {
    background-color: #eef0f2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
