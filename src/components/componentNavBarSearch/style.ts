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
