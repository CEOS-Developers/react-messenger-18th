import * as styled from 'styled-components';
import reset from 'styled-reset';
import PretendardVariable from 'static/fonts/PretendardVariable.woff2';

export const ChatRoomBackgroundColor = '#93aad4';

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  #root {
    --Background-White: #fafafa;
    --Blue: ${ChatRoomBackgroundColor};
    --Green: #ace49b;
    --Gray-1: #f5f5f5;
    --Gray-2: #8f8f8f;
    --Gray-3: #5a5a5a;
    --gray-30: rgba(0, 0, 0, 0.3);
  }
  html,
  body,
  #root {
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

  input:focus,
  textarea:focus {
    outline: none;
  }
  input::placeholder,
  textarea::placeholder {
    font-family: 'Pretendard Variable';
  }

  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: block;
    src: url(${PretendardVariable}) format('woff2-variations');
  }
`;
