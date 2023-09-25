import * as styled from 'styled-components';
import reset from 'styled-reset';
import PretendardVariable from 'static/fonts/PretendardVariable.woff2';

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: block;
    src: url(${PretendardVariable}) format('woff2-variations');
  }
`;

export const ChatRoomBackgroundColor = '#93aad4';
