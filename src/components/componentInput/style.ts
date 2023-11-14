import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--grey-800);
    font-size: var(--font-size2);
    font-weight: var(--text-weight500);
    font-family: var(--font-family-inter);
  }

  input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    font-family: var(--font-family-inter);
    border-radius: var(--border-radius);
    border: 1.5px solid var(--grey-200);
    outline: 0;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
