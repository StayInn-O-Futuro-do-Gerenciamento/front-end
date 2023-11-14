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
    height: 460px;
    border-radius: var(--border-radius);
    background-color: var(--grey-00);
    padding: 16px;
  }
`;
