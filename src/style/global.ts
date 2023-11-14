import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    
    }
    button{
        cursor: pointer;
        font-family: "Inter";
        border: none;
    }

    li{
        list-style: none;
    }
    :root {
        --grey-00:#FFFFFF;
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

        --orange-50: #fef4e6;
        --orange-100: #fdddb3;
        --orange-200: #fbcc8e;
        --orange-300: #fab55a;
        --orange-400: #f9a63a;
        --orange-500: #F79009;
        --orange-600: #e18308;
        --orange-700: #af6606;
        --orange-800: #884f05;
        --orange-900: #683c04;

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

        --font-family-inter: "Inter", sans-serif;

        --border-radius: 8px;

        --text-weight700: 700;
        --text-weight600: 600;
        --text-weight500: 500;
        --text-weight400: 400;

        --font-size1: 20px;
        --font-size2: 14px;
        --font-size3: 16px;
}

`;
