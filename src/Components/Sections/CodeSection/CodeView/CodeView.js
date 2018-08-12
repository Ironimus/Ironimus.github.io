import React from 'react';
import styled, { css } from 'styled-components';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark';
import { HideScrollbars } from 'utils';

const StyledPre = styled.pre`
  background-color: transparent;
  border-radius: 0;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  & * {
    text-shadow: none !important;
  }
`;

const Pre = ({ children }) => (
  <HideScrollbars outerStyle={() => css`border-radius: 10px;`}>
    <StyledPre>{children}</StyledPre>
  </HideScrollbars>
);

registerLanguage('jsx', jsx);

const CodeView = ({ children }) => (
    <SyntaxHighlighter
    PreTag={Pre}
    language='jsx'
    style={atomDark}
    showLineNumbers
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeView;