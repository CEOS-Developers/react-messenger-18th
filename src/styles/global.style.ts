import * as styled from 'styled-components';
import reset from 'styled-reset';
import PretendardVariable from 'static/fonts/PretendardVariable.woff2';

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  body {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 00;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: block;
    src: url(${PretendardVariable}) format('woff2-variations');
  }
`;
