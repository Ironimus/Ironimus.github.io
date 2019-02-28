import React from 'react'
import SectionWrapper from 'Components/Sections/SectionWrapper'
import styled from 'styled-components'
import { Media } from 'utils'
import ArrowDown from './ArrowDown'
import { useTypingAnimation, WithBlinkingCursor } from 'Components/TypingAnimation'
import { colors, breakpoints } from 'utils/constants'

const StyledHomeSection = styled(SectionWrapper)`
	display: flex;
	align-items: center;
`

const ContentWrapper = styled.div`
	height: 50vh;
	padding-bottom: 100px;
`

const Description = styled.p`
	font-weight: 100;
	word-break: break-all;
	padding-top: 20px;
`

const SmallerH1 = styled.h1`
	font-size: 60px;
`

const ColoredText = styled.span`
	color: ${colors.complementary};
`

const HomeSection = ({ scrollToSection, ...props }) => {
	const [animatedText, isTyping] = useTypingAnimation([
		'React/Redux',
		'functional programming',
		'JavaScript',
		"React or another library I should've used instead",
		'styled components and why css-in-js is cool',
	])

	return (
		<StyledHomeSection {...props}>
			<ContentWrapper>
				<SmallerH1>Hi,</SmallerH1>
				<h1>I'm Stas</h1>
				<Description>
					Ask me about{' '}
					<ColoredText>
						<WithBlinkingCursor stopped={isTyping}>{animatedText}</WithBlinkingCursor>
					</ColoredText>
				</Description>
			</ContentWrapper>
			<Media
				width={breakpoints.mobile}
				larger={<ArrowDown onClick={() => scrollToSection(1)}>Skills</ArrowDown>}
			/>
		</StyledHomeSection>
	)
}

export default HomeSection
