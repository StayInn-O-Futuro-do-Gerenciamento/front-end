import styled from "styled-components";

export const SideBarMain = styled.section`
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;

  .div-logo {
    display: flex;
    align-items: center;
    gap: 21px;
    margin: 22px 0px 22px 23px;
    h1 {
      font-family: var(--font-family-inter);
      font-weight: var(--text-weight500);
      font-size: var(--font-size3);
      color: var(--orange-400);
    }
    img {
      width: 54px;
      height: 50px;
      filter: var(--svg-color-orange);
    }
  }
  .div-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 10px 12px;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        padding: 8px 5px;
        border-radius: 8px;
        img {
          width: 30px;
          height: 30px;
          filter: var(--svg-color-grey);
        }
        .typeRoom {
          width: 30px;
          height: 30px;
          filter: var(--svg-color-grey);
        }
        p {
          font-family: var(--font-family-inter);
        }
      }
      li:hover {
        background-color: var(--orange-50);
        p {
          color: var(--orange-400);
        }
        img {
          filter: var(--svg-color-orange);
        }
        .typeRoom {
          filter: var(--svg-color-orange);
        }
      }
      .selected-btn {
        background-color: var(--orange-50);
        p {
          color: var(--orange-400);
        }
        img {
          filter: var(--svg-color-orange);
        }
        .typeRoom {
          filter: var(--svg-color-orange);
        }
      }
    }
  }
  .copyrigth {
    font-family: var(--font-family-inter);
    font-size: 14px;
    text-align: center;
  }
`;
