import React from 'react'
import styled from 'styled-components'
import { opacify } from 'polished'
import { colors } from 'utils/constants'

const Svg = styled.svg`
	display: block;
	width: 134px;
	height: 34px;
`

const Path = styled.path`
	transform: translate(0.6 0.7);
	fill: transparent;
	stroke: ${colors.text};
	transition: stroke 0.3s;
`

const Sub = styled.p`
	font-size: 20px;
	transform: translateY(50%);
	transition: color 0.3s;
`

const ArrowDown = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50vw;
	transform: translate(-50%, 0);
	text-align: center;
	transition: transform 0.3s;
	cursor: pointer;
	&:hover {
		transform: translate(-50%, -20%);
		& ${Path} {
			stroke: ${opacify(0.2, colors.text)};
		}
		& ${Sub} {
			color: ${opacify(0.2, colors.text)};
		}
	}
`

export default ({ children, onClick }) => (
	<ArrowDown onClick={onClick}>
		<Sub>{children}</Sub>
		<Svg>
			<Path d="M132.806 0L66.4028 32.7175L0 0" stroke-linecap="round" stroke-linejoin="round" />
		</Svg>
	</ArrowDown>
)
