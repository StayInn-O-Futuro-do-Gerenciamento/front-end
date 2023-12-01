import styled from "styled-components";

export const NavBarSearchStyle = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .div1 {
    display: flex;

    background-color: var(--grey-50);
    padding: 0 15px;
    border-radius: 10px;
    max-height: 40px;
    gap: 20px;
    .btnFlag {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-bottom: 1px solid transparent;
    }
    .btnFlag-active {
      padding: 0;
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-bottom: 1px solid var(--grey-900);
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
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        appearance: none;
        background-color: transparent;
        cursor: pointer;
        width: 35px;
        height: 35px;

        &::-webkit-color-swatch {
          border-radius: 10px;
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
