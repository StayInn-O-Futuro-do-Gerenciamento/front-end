import styled, { css } from "styled-components";
import { IStyledButtonProps } from "./type";

export const StyledButton = styled.button<IStyledButtonProps>`
  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "createBooking":
        return css`
          width: 151px;
          height: 30px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          background-color: var(--orange-500);
          color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;
    }
  }}
`;
