import styled from 'styled-components'
import React from 'react'
import { Media } from 'utils'
import { desaturate } from 'polished'
import { media, colors } from 'utils/constants'

const Percentage = styled.div`
	position: relative;
	width: 100%;
	margin: 75px 0;
`

const RangeSvg = styled.svg`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
`

const TextWrapper = styled.div`
	height: 100%;
	padding: 8px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	font-weight: lighter;
	${media.mobile} {
		padding: 15px 0;
	}
`

const MobileRange = styled.div`
	position: absolute;
	bottom: 0;
	height: 4px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	&::after {
		content: '';
		height: 100%;
		display: block;
		width: ${props => props.value}%;
		background-color: ${desaturate(0.1, colors.complementary)};
	}
`

const Svg = ({ value, id }) => (
	<RangeSvg>
		<clipPath id={`clip${id}`} clipPathUnits="objectBoundingBox">
			<path
				d={`M0 0
      H${value === 100 || value === 0 ? value / 100 : value / 100 + 0.015}
      L${value === 100 || value === 0 ? value / 100 : value / 100 - 0.015}
      1H0V0Z`}
			/>
		</clipPath>
		<rect id={`outer${id}`} rx="22.5" width="100%" height="100%" fillOpacity=".5" />
		<use clipPath={`url(#clip${id})`} xlinkHref={`#outer${id}`} fill={colors.complementary} />
	</RangeSvg>
)

export default ({ text, value, id }) => (
	<Percentage>
		<Media larger={<Svg value={value} id={id} />} smaller={<MobileRange value={value} />} />
		<TextWrapper>
			<p>{text}</p>
			<p>{value}%</p>
		</TextWrapper>
	</Percentage>
)
