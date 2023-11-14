import styled from "styled-components";

export const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px 20px;

  width: 1020px;

  //   background-color: var(--grey-100);

  border-radius: 15px;

  font-family: var(--font-family-inter);
  h3 {
    font-size: var(--font-size1);
    font-weight: var(--text-weight600);
  }

  gap: 15px;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;
