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

  textarea {
    width: 100%;
    height: 80px;
    padding-left: 10px;
    font-family: var(--font-family-inter);
    border-radius: var(--border-radius);
    border: 1.5px solid var(--grey-200);
    outline: 0;
    resize: none; /* Impede o redimensionamento */
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

  .phoneNumber {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .emergencyContacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
