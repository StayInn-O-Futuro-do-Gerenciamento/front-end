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

      case "closeModal":
        return css`
          font-size: var(--font-size1);
          border-radius: var(--border-radius);
          color: var(--grey-800);
          background-color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;
      case "cancelModal":
        return css`
          height: 40px;
          padding: 9.5px 24px 9.5px 24px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          border: 1.5px solid var(--grey-400);
          color: var(--grey-800);
          background-color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;

      case "saveModal":
        return css`
          padding: 9.5px 24px 9.5px 24px;
          height: 40px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          background-color: var(--green-400);
          color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;
      case "deleteGuest":
        return css`
          padding: 9.5px 24px 9.5px 24px;
          height: 40px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          background-color: var(--red-600);
          color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;
      case "addImageHospede":
        return css`
          height: 40px;
          padding: 4px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          border: 1.5px solid var(--grey-400);
          color: var(--grey-800);
          background-color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;

      case "filterButton":
        return css`
          padding: 7.5px 16px 7.5px 16px;
          font-size: var(--font-size2);
          border-radius: 100px;
          border: 1.5px solid var(--grey-300);
          color: var(--grey-600);
          background-color: var(--grey-00);
          font-weight: var(--text-weight500);
        `;

      case "buttonCreate":
        return css`
          padding: 7.5px 16px 7.5px 16px;
          font-size: var(--font-size2);
          border-radius: var(--border-radius);
          color: var(--grey-00);
          background-color: var(--orange-300);
          font-weight: var(--text-weight500);
        `;
    }
  }}
`;
