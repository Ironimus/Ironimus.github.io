import styled, { css } from 'styled-components'
import SectionWrapper from 'Components/Sections/SectionWrapper'
import { transparentize } from 'polished'
import { colors, media } from 'utils/constants'

export const StyledContactSection = styled(SectionWrapper)`
	padding-top: 50px;
	padding-bottom: 50px;
	min-height: auto;
	${media.mobile} {
		padding: 60px 20px 84px;
		height: auto;
	}
`

export const P = styled.p`
	margin-top: 20px;
`

export const A = styled.a`
	color: ${colors.complementary};
	display: inline-block;
`

const InputCss = css`
	border: none;
	background-color: ${transparentize(0.8, colors.text)};
	color: #bebebe;
	font-size: inherit;
	font-family: inherit;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	margin-top: 20px;
	outline: none;
	&:invalid {
		box-shadow: none;
	}
`

export const EmailInput = styled.input`
	${InputCss};
`

export const TextareaWrapper = styled.div`
	display: flex;
	margin-top: 20px;
	width: 100%;
	background-color: ${transparentize(0.8, colors.text)};
	overflow: hidden;
	${media.mobile} {
		display: block;
		background-color: transparent;
	}
`

export const Textarea = styled.textarea`
	${InputCss} background-color: transparent;
	resize: none;
	display: block;
	min-height: 150px;
	width: calc(100% - 150px);
	margin-top: 0;
	&:invalid {
		width: 100%;
	}
	${media.mobile} {
		height: 100vh;
		width: 100%;
		max-height: calc(100vh - 460px);
		background-color: ${transparentize(0.8, colors.text)};
	}
`

export const SubmitButton = styled.button`
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	color: ${transparentize(0.8, colors.text)};
	background-color: ${colors.background};
	border: 3px solid ${transparentize(0.8, colors.text)};
	cursor: pointer;
	transform: translateX(0);
	transition: transform 0.3s;
	overflow: hidden;
	${Textarea}:invalid + &,
	${EmailInput}:invalid + ${TextareaWrapper} > & {
		width: 0;
		border-width: 0;
		pointer-events: none;
		transform: translateX(100%);
		transition: transform 0.3s, width 0s 0.3s, border-width 0s 0.3s;
	}
	${media.mobile} {
		${InputCss} & svg {
			display: none;
		}
		background-color: ${colors.complementary};
		color: rgba(255, 255, 255, 0.75);
		font-size: 24px;
		padding: 15px;
		border: 3px solid transparent;
		transition: color 0.3s, background-color 0.3s, border-color 0.3s;
		${Textarea}:invalid + &,
		${EmailInput}:invalid + ${TextareaWrapper} > & {
			width: 100%;
			transform: none;
			border: 3px solid ${transparentize(0.5, colors.text)};
			color: ${transparentize(0.5, colors.text)};
			background-color: transparent;
			transition: color 0.3s, background-color 0.3s, border-color 0.3s;
		}
	}
`
