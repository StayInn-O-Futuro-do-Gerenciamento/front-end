import styled, { css } from "styled-components";

export const TableRow = styled.tr<{ statusColor: string }>`
  .status {
    ${({ statusColor }) => {
      switch (statusColor) {
        case "clean":
          return css`
            border-radius: 16px;
            color: var(--blue-600);
            background-color: var(--blue-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
        case "dirty":
          return css`
            border-radius: 16px;
            color: var(--red-600);
            background-color: var(--red-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
        case "WIP":
          return css`
            border-radius: 16px;
            color: var(--orange-600);
            background-color: var(--orange-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;

        case "scheduled":
          return css`
            border-radius: 16px;
            color: var(--orange-600);
            background-color: var(--orange-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
        case "onGoing":
          return css`
            border-radius: 16px;
            color: var(--blue-600);
            background-color: var(--blue-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
        case "finished":
          return css`
            border-radius: 16px;
            color: var(--red-600);
            background-color: var(--red-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
        case "full":
          return css`
            border-radius: 16px;
            color: var(--green-600);
            background-color: var(--green-50);
            width: max-content;
            padding: 3px 8px 3px 8px;
          `;
      }
    }}
  }
`;
