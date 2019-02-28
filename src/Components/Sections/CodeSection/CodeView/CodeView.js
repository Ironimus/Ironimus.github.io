import React from 'react'
import styled, { css } from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import markdown from 'react-syntax-highlighter/languages/prism/markdown'
import clike from 'react-syntax-highlighter/languages/prism/clike'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'
import { HideScrollbars } from 'utils'
import { breakpoints } from 'utils/constants'

const StyledPre = styled.pre`
	background-color: transparent;
	border-radius: 0;
	border: none;
	font-size: 16px;
	& * {
		text-shadow: none !important;
	}
`

const Pre = ({ children }) => (
	<HideScrollbars
		outerStyle={() => css`
			border-bottom-right-radius: 10px;
			width: 75%;
			padding-left: 20px;
			@media (max-width: ${breakpoints.fileTreeVisibility}px) {
				width: 100%;
			}
		`}
	>
		<StyledPre>{children}</StyledPre>
	</HideScrollbars>
)

registerLanguage('js', jsx)
registerLanguage('markdown', markdown)
registerLanguage('clike', clike)

const CodeView = ({ children, highlight }) => (
	<SyntaxHighlighter PreTag={Pre} language={highlight} style={atomDark} showLineNumbers>
		{children}
	</SyntaxHighlighter>
)

export default CodeView
