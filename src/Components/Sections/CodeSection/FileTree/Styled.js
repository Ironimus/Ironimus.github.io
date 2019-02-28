import React from 'react'
import styled, { css } from 'styled-components'
import icons from './icons'
import { colors, breakpoints } from 'utils/constants'
import { HideScrollbars } from 'utils'

const StyledFileTree = props => css`
	width: 25%;
	@media (max-width: ${breakpoints.fileTreeVisibility}px) {
		opacity: 0;
		transform: translateY(-20px);
		background-color: ${colors.background};
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		pointer-events: none;
		transition: transform 0.3s, opacity 0.2s 0.1s;
		${props.isVisible &&
			css`
				z-index: 9;
				opacity: 1;
				transform: translateY(0);
				pointer-events: all;
			`};
	}
`

export const FileTreeWrap = ({ children, isVisible }) => (
	<HideScrollbars outerStyle={StyledFileTree} isVisible={isVisible}>
		{children}
	</HideScrollbars>
)

export const Element = styled.div`
  color: ${props => props.isActive && '#fff'};
  font-size: 16px;
  font-weight: lighter;
  white-space: nowrap;
  padding: 5px 5px 5px ${props => props.depth * 10 + 20}px;
  cursor: pointer;
  ::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 7px;
    vertical-align: -8%;
    background: url('${props => icons[props.iconType]}') no-repeat center;
  }
  @media (max-width: ${breakpoints.fileTreeVisibility}px) {
    font-size: 20px;
    ::before {
      width: 22px;
      height: 22px;
    }
  }
`
