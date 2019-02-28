import React from 'react'
import { useTypingAnimation, WithBlinkingCursor } from 'Components/TypingAnimation'
import styled from 'styled-components'

const StyledLoading = styled.p`
	padding: 10px 20px;
`

const Loading = () => {
	const [animatedText, isTyping] = useTypingAnimation(
		[
			'Loading...',
			'...',
			"If you see this text this far it probably isn't my mistake, check your internet connection",
		],
		{ typingSpeed: 12 }
	)
	return (
		<StyledLoading>
			<WithBlinkingCursor stopped={isTyping}>{animatedText}</WithBlinkingCursor>
		</StyledLoading>
	)
}

export default Loading
