import styled from "styled-components";

export const NavBarSearchStyle = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .div1 {
    display: flex;
    align-items: center;
    width: 300px;
    background-color: var(--grey-50);
    padding: 10px;
    border-radius: 10px;
    max-height: 40px;
    gap: 10px;
    input {
      border: none;
      width: 100%;
      background-color: transparent;
    }
    input::placeholder {
      border: none;
    }
    input:focus {
      outline: none;
    }
  }
  .div2 {
    display: flex;
    gap: 20px;
    align-items: center;

    .modeTheme1 {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;

      color: #ffff;

      border-radius: 100%;

      background-color: #2b2f38;
      cursor: pointer;

      svg {
        width: 100%;
        height: 70%;
      }
    }
    .modeTheme2 {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;

      color: #2b2f38;

      border-radius: 100%;

      background-color: #ffff;
      cursor: pointer;

      svg {
        width: 100%;
        height: 70%;
      }
    }
    .themes {
      display: flex;
      align-items: center;
      justify-content: center;
      .buttonColorsW {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .bb {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #448df2;
        }
        .br {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #f36960;
        }
        .bg {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #41c588;
        }
      }
      .buttonColorsD {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        .bb {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #1570ef;
        }
        .br {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #f04438;
        }
        .bg {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #12b76a;
        }
      }
    }

    img {
      cursor: pointer;
    }

    label {
      display: flex;
      align-items: center;

      .react-switch {
        react-switch-bg {
        }
        .react-switch-handle {
        }
      }
    }
  }
  .iconUser {
    width: 40px;
    height: 40px;
    color: var(--orange-400);
  }
`;
