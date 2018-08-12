import { injectGlobal } from 'styled-components';
import { colors } from 'utils/constants';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    color: ${colors.text};
    background: ${colors.background};
  }

  h1 {
    font-size: 72px;
  }

  h2 {
    font-size: 48px;
  }

  h1, h2, h3, h4 {
    font-weight: normal;
  }
`;