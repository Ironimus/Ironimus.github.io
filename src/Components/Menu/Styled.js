import styled from 'styled-components'
import { opacify, darken } from 'polished'
import { colors, media } from 'utils/constants'

export const StyledMenu = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	right: 0;
	top: 0;
	height: 100vh;
	width: 280px;
	justify-content: center;
	z-index: 99999;
	&::after {
		content: '';
		background: ${colors.complementary};
		height: 64px;
		width: 4px;
		right: 0;
		top: 50vh;
		transform: translateY(${props => 100 * (props.activeSection - props.children.length / 2)}%);
		position: absolute;
		align-self: auto;
		transition: transform 0.3s;
	}
	${media.mobile} {
		background: ${darken(0.05, colors.background)};
		top: auto;
		bottom: 0;
		height: 64px;
		width: 100vw;
		justify-content: space-between;
		flex-direction: row;
		&::after {
			width: ${props => 100 / props.children.length}vw;
			height: 4px;
			bottom: 0;
			left: 0;
			top: auto;
			transform: translateX(${props => 100 * props.activeSection}%);
			transition: transform 0.3s;
		}
	}
`

export const MenuEntry = styled.div`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: left;
	cursor: pointer;
	transition: colors 0.3s;
	color: ${props => props.isActive && opacify(0.2, colors.text)};
	font-weight: lighter;
	font-size: 28px;
	&:hover {
		color: ${props => opacify(0.2, colors.text)};
	}
	${media.mobile} {
		width: 100%;
		justify-content: center;
		font-size: 18px;
	}
`
