import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 13px;
  flex-direction: column;
  width: 100%;
  background-color: var(--grey-00);
  font-family: var(--font-family-inter);

  /* .errorMessage {
    font-size: var(--font-size2);
    color: var(--red-600);
  } */

  label {
    color: var(--grey-800);
    font-size: var(--font-size2);
    font-weight: var(--text-weight500);
    font-family: var(--font-family-inter);
  }

  .statusRoom {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    font-family: var(--font-family-inter);
    border-radius: var(--border-radius);
    border-color: var(--grey-200);
  }
`;
