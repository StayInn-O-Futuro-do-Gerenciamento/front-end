import styled from "styled-components";

export const CalendarMain = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px 50px;
  font-family: var(--font-family-inter);
  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    div {
      display: flex;
      gap: 20px;
      p:first-child {
        border: 2px solid var(--green-50);
        background-color: var(--green-50);
        color: var(--green-600);
        padding: 10px;
        border-radius: 18px;
      }
      p:last-child {
        border: 2px solid var(--red-50);
        background-color: var(--red-50);
        color: var(--red-600);
        padding: 10px;
        border-radius: 18px;
      }
    }
    button {
      padding: 10px;
      background-color: var(--orange-400);
      color: var(--grey-button-00);
      border-radius: 8px;
      font-size: 16px;
    }
  }
  .checkin-event {
    border: 2px solid var(--green-50);
    background-color: var(--green-50);
    color: var(--green-600);
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 18px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--green-600);

      z-index: 3;
    }
  }

  .fc-scrollgrid-liquid {
    overflow: hidden;
  }
  th {
    .fc-scroller-harness {
      .fc-scroller {
        overflow: hidden !important;
      }
    }
  }

  .fc-scroller {
    overflow-y: auto;
    max-height: 727px;
    scrollbar-width: thin;
    scrollbar-color: var(--orange-400) var(--grey-50);
  }

  .fc-scroller::-webkit-scrollbar {
    width: 12px;
  }

  .fc-scroller::-webkit-scrollbar-thumb {
    background-color: var(--orange-400);
    border-radius: 6px;
  }

  .fc-scroller::-webkit-scrollbar-track {
    background-color: var(--grey-50);
  }
  .fc-daygrid-body {
    overflow: hidden;
  }

  .fc-day-today {
    background-color: transparent !important;
  }
  .fc-daygrid-day-frame:hover {
    background-color: var(--grey-calendar-00);
  }
  .checkout-event {
    border: 2px solid var(--red-50);
    background-color: var(--red-50);
    color: var(--red-600);
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 18px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--red-600);

      z-index: 3;
    }
  }

  .fc-toolbar-title::first-letter {
    text-transform: uppercase;
  }
  .fc-toolbar-title {
    color: var(--orange-600);
    padding: 10px 20px;
  }
  .fc-prev-button,
  .fc-next-button {
    width: 50px;
    background-color: var(--orange-400);
    color: var(--grey-50);
    border: none;
    outline: 0;
    &:hover {
      background-color: var(--orange-100);
      color: var(--grey-400);
    }
  }
  .fc-header-toolbar .fc-prev-button:active,
  .fc-header-toolbar .fc-next-button:active {
    background-color: var(--orange-400);
    color: var(--grey-50);
  }
  .fc-daygrid-day-frame {
    border-left: 2px solid var(--grey-50);
  }

  .fc-daygrid-day-frame:last-child {
    border-right: 2px solid var(--grey-50);
  }
  .fc-toolbar-chunk:last-child {
    display: flex;
    gap: 20px;
    .fc-button-group {
      .fc-button {
        background-color: var(--orange-400);
        border: none;
      }
    }
  }

  .fc-col-header-cell {
    text-align: center;
    font-weight: bold;
    border: none;
  }

  .fc-scrollgrid {
    border: none;
  }
  .fc td,
  .fc th {
    border-style: none;
  }

  .fc-col-header-cell-cushion {
    padding: 10px 20px;
    color: var(--orange-600);
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
    border: 2px solid var(--grey-00);
  }

  .fc-day-today .fc-col-header-cell-cushion {
    background-color: var(--orange-50);
    border: 2px solid var(--orange-400);
    border-radius: 18px;
  }
`;

export const LoadingBaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  font-family: var(--font-family-inter);
  background-color: #fff;
  border-radius: var(--border-radius);
  width: 100%;
  height: 500px;
`;
