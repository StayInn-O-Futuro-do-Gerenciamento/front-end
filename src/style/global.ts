import { createGlobalStyle, css } from "styled-components";

interface ColorPalette {
  [key: string]: string;
}

interface ExecutionProps {
  theme: string;
  paletteColor?: Record<string, string>;
}

export const GlobalStyle = createGlobalStyle<ExecutionProps>`

${({ theme, paletteColor }) => {
  switch (theme) {
    case "light":
      const defaultColors: ColorPalette = {
        "--orange-50": "#fef4e6",
        "--orange-100": "#fdddb3",
        "--orange-200": "#fbcc8e",
        "--orange-300": "#fab55a",
        "--orange-400": "#f9a63a",
        "--orange-500": "#f79009",
        "--orange-600": "#e18308",
        "--orange-700": "#af6606",
        "--orange-800": "#884f05",
        "--orange-900": "#683c04",
      };

      let selectedPalette: ColorPalette = {};

      selectedPalette = {
        ...selectedPalette,
        ...paletteColor,
      };

      const finalPalette: ColorPalette = {
        ...defaultColors,
        ...selectedPalette,
      };

      const paletteStyles = Object.keys(finalPalette)
        .map((key) => `${key}: ${finalPalette[key]};`)
        .join("\n");

      return css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--orange-400);
            border-radius: 6px;
          }

          &::-webkit-scrollbar-track {
            background-color: var(--grey-50);
          }
        }

        button {
          cursor: pointer;
          font-family: "Inter";
          border: none;
        }

        li {
          list-style: none;
        }

        input {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }

        select {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }
        :root {
          --grey-00: #ffffff;
          --grey-50: #f0f1f3;
          --grey-100: #d0d3d9;
          --grey-200: #b9bdc7;
          --grey-300: #989fad;
          --grey-400: #858d9d;
          --grey-500: #667085;
          --grey-600: #5d6679;
          --grey-700: #48505e;
          --grey-800: #383e49;
          --grey-900: #2b2f38;

          --grey-button-00: #ffffff;
          --grey-calendar-00: #f8f8ff;
          --grey-inputBack-00: #f0f1f3;
          --grey-lineTable-00: #f0f1f3;
          --grey-bgInput-00: #f0f1f3;

          ${paletteStyles}

          --blue-50: #e8f1fd;
          --blue-100: #b6d3fa;
          --blue-200: #93bdf8;
          --blue-300: #629ff4;
          --blue-400: #448df2;
          --blue-500: #1570ef;
          --blue-600: #1366d9;
          --blue-700: #0f50aa;
          --blue-800: #0c3e83;
          --blue-900: #092f64;

          --red-50: #feeceb;
          --red-100: #fac5c1;
          --red-200: #f8a9a3;
          --red-300: #f5827a;
          --red-400: #f36960;
          --red-500: #f04438;
          --red-600: #da3e33;
          --red-700: #aa3028;
          --red-800: #84251f;
          --red-900: #651d18;

          --green-50: #e7f8f0;
          --green-100: #b6e9d1;
          --green-200: #92deba;
          --green-300: #60cf9b;
          --green-400: #41c588;
          --green-500: #12b76a;
          --green-600: #10a760;
          --green-700: #0d824b;
          --green-800: #0a653a;
          --green-900: #084d2d;

          --svg-color-grey: invert(38%) sepia(33%) saturate(256%)
            hue-rotate(183deg) brightness(93%) contrast(88%);

          --svg-color-grey1: invert(98%) sepia(1%) saturate(3317%)
            hue-rotate(184deg) brightness(91%) contrast(86%);

          --svg-color-grey2: invert(100%) sepia(100%) saturate(0%)
            hue-rotate(194deg) brightness(101%) contrast(102%);

          --font-family-inter: "Inter", sans-serif;

          --border-radius: 8px;

          --text-weight700: 700;
          --text-weight600: 600;
          --text-weight500: 500;
          --text-weight400: 400;

          --font-size1: 20px;
          --font-size2: 14px;
          --font-size3: 26px;
          --font-size4: 16px;
          --font-size5: 12px;
        }
      `;
    case "dark":
      const defaultColorsD: ColorPalette = {
        "--orange-50": "#fef4e6",
        "--orange-100": "#fdddb3",
        "--orange-200": "#fbcc8e",
        "--orange-300": "#fab55a",
        "--orange-400": "#f9a63a",
        "--orange-500": "#f79009",
        "--orange-600": "#e18308",
        "--orange-700": "#af6606",
        "--orange-800": "#884f05",
        "--orange-900": "#683c04",
      };

      let selectedPaletteD: ColorPalette = {};

      selectedPaletteD = {
        ...selectedPaletteD,
        ...paletteColor,
      };

      const finalPaletteD: ColorPalette = {
        ...defaultColorsD,
        ...selectedPaletteD,
      };

      const paletteStylesD = Object.keys(finalPaletteD)
        .map((key) => `${key}: ${finalPaletteD[key]};`)
        .join("\n");

      return css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--orange-400);
            border-radius: 6px;
          }

          &::-webkit-scrollbar-track {
            background-color: var(--grey-50);
          }
        }

        button {
          cursor: pointer;
          font-family: "Inter";
          border: none;
        }

        li {
          list-style: none;
        }

        input {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }

        select {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }
        :root {
          --grey-00: #2b2f38;
          --grey-50: #383e49;
          --grey-100: #48505e;
          --grey-200: #5d6679;
          --grey-300: #667085;
          --grey-400: #858d9d;
          --grey-500: #989fad;
          --grey-600: #b9bdc7;
          --grey-700: #d0d3d9;
          --grey-800: #f0f1f3;
          --grey-900: #ffffff;

          --grey-button-00: #ffffff;
          --grey-calendar-00: #383e49;
          --grey-inputBack-00: #48505e;
          --grey-lineTable-00: #d0d3d9;
          --grey-bgInput-00: #383e49;
          ${paletteStylesD}
          // --orange-50: #884f05;
          // --orange-100: #683c04;
          // --orange-200: #af6606;
          // --orange-300: #e18308;
          // --orange-400: #f79009;
          // --orange-500: #f9a63a;
          // --orange-600: #fab55a;
          // --orange-700: #fbcc8e;
          // --orange-800: #fdddb3;
          // --orange-900: #fef4e6;

          --blue-50: #092f64;
          --blue-100: #0c3e83;
          --blue-200: #0f50aa;
          --blue-300: #1366d9;
          --blue-400: #1570ef;
          --blue-500: #448df2;
          --blue-600: #629ff4;
          --blue-700: #93bdf8;
          --blue-800: #b6d3fa;
          --blue-900: #e8f1fd;

          --red-50: #651d18;
          --red-100: #84251f;
          --red-200: #aa3028;
          --red-300: #da3e33;
          --red-400: #f04438;
          --red-500: #f36960;
          --red-600: #f5827a;
          --red-700: #f8a9a3;
          --red-800: #fac5c1;
          --red-900: #feeceb;

          --green-50: #084d2d;
          --green-100: #0a653a;
          --green-200: #0d824b;
          --green-300: #10a760;
          --green-400: #12b76a;
          --green-500: #41c588;
          --green-600: #60cf9b;
          --green-700: #92deba;
          --green-800: #b6e9d1;
          --green-900: #e7f8f0;

          --svg-color-grey: invert(38%) sepia(33%) saturate(256%)
            hue-rotate(183deg) brightness(93%) contrast(88%);

          --svg-color-grey1: invert(92%) sepia(10%) saturate(115%)
            hue-rotate(182deg) brightness(94%) contrast(85%);

          --svg-color-grey2: invert(11%) sepia(4%) saturate(3621%)
            hue-rotate(184deg) brightness(95%) contrast(80%);

          --font-family-inter: "Inter", sans-serif;

          --border-radius: 8px;

          --text-weight700: 700;
          --text-weight600: 600;
          --text-weight500: 500;
          --text-weight400: 400;

          --font-size1: 20px;
          --font-size2: 14px;
          --font-size3: 26px;
          --font-size4: 16px;
          --font-size5: 12px;
        }
      `;

      return css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--orange-400);
            border-radius: 6px;
          }

          &::-webkit-scrollbar-track {
            background-color: var(--grey-50);
          }
        }

        button {
          cursor: pointer;
          font-family: "Inter";
          border: none;
        }

        li {
          list-style: none;
        }

        input {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }

        select {
          background-color: var(--grey-bgInput-00);
          color: var(--grey-700);

          &::placeholder {
            color: var(--grey-700);
          }
        }
        :root {
          --grey-00: #2b2f38;
          --grey-50: #383e49;
          --grey-100: #48505e;
          --grey-200: #5d6679;
          --grey-300: #667085;
          --grey-400: #858d9d;
          --grey-500: #989fad;
          --grey-600: #b9bdc7;
          --grey-700: #d0d3d9;
          --grey-800: #f0f1f3;
          --grey-900: #ffffff;

          --grey-button-00: #ffffff;
          --grey-calendar-00: #383e49;
          --grey-inputBack-00: #48505e;
          --grey-lineTable-00: #d0d3d9;
          --grey-bgInput-00: #383e49;

          --orange-50: #084d2d;
          --orange-100: #0a653a;
          --orange-200: #0d824b;
          --orange-300: #10a760;
          --orange-400: #12b76a;
          --orange-500: #41c588;
          --orange-600: #60cf9b;
          --orange-700: #92deba;
          --orange-800: #b6e9d1;
          --orange-900: #e7f8f0;

          --blue-50: #092f64;
          --blue-100: #0c3e83;
          --blue-200: #0f50aa;
          --blue-300: #1366d9;
          --blue-400: #1570ef;
          --blue-500: #448df2;
          --blue-600: #629ff4;
          --blue-700: #93bdf8;
          --blue-800: #b6d3fa;
          --blue-900: #e8f1fd;

          --red-50: #651d18;
          --red-100: #84251f;
          --red-200: #aa3028;
          --red-300: #da3e33;
          --red-400: #f04438;
          --red-500: #f36960;
          --red-600: #f5827a;
          --red-700: #f8a9a3;
          --red-800: #fac5c1;
          --red-900: #feeceb;

          --green-50: #084d2d;
          --green-100: #0a653a;
          --green-200: #0d824b;
          --green-300: #10a760;
          --green-400: #12b76a;
          --green-500: #41c588;
          --green-600: #60cf9b;
          --green-700: #92deba;
          --green-800: #b6e9d1;
          --green-900: #e7f8f0;

          --svg-color-grey: invert(38%) sepia(33%) saturate(256%)
            hue-rotate(183deg) brightness(93%) contrast(88%);

          --svg-color-grey1: invert(92%) sepia(10%) saturate(115%)
            hue-rotate(182deg) brightness(94%) contrast(85%);

          --svg-color-grey2: invert(11%) sepia(4%) saturate(3621%)
            hue-rotate(184deg) brightness(95%) contrast(80%);

          --svg-color-orange: invert(74%) sepia(74%) saturate(4396%)
            hue-rotate(109deg) brightness(90%) contrast(86%);

          --font-family-inter: "Inter", sans-serif;

          --border-radius: 8px;

          --text-weight700: 700;
          --text-weight600: 600;
          --text-weight500: 500;
          --text-weight400: 400;

          --font-size1: 20px;
          --font-size2: 14px;
          --font-size3: 26px;
          --font-size4: 16px;
          --font-size5: 12px;
        }
      `;
  }
}}
`;
