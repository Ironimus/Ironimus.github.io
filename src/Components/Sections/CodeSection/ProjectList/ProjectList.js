import React from 'react'
import styled from 'styled-components'
import { colors } from 'utils/constants'

const ProjectList = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`

const A = styled.a`
	text-decoration: none;
	color: ${colors.text};
`

const Element = styled.h4`
	padding-bottom: 40px;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: ${props => (props.active ? 4 : 0)}px;
		background-color: ${colors.complementary};
		bottom: 28px;
		left: 0;
	}
	&::before {
		content: attr(data-title);
		position: absolute;
		bottom: ${props => (props.active ? 0 : 15)}px;
		right: 0;
		font-size: 14px;
		color: ${colors.complementary};
		opacity: 0;
		transition: opacity 0.2s;
		text-decoration: underline;
		[href^='#'] & {
			text-decoration: none;
		}
	}
	&:hover::before,
	${props => props.idProp}:target &::before {
		opacity: 1;
	}
`

export default ({ children, active = 0, description }) => (
	<ProjectList>
		{children.map((project, i) => (
			<A href={project.url || '#project' + i} key={i} id={'project' + i}>
				<Element idProp={'#project' + i} active={active === i} data-title={project.link}>
					{project.name}
				</Element>
			</A>
		))}
	</ProjectList>
)
