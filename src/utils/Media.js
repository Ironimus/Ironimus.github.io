import React, { Component, Fragment } from 'react'
import EventListener from 'react-event-listener'
import styled from 'styled-components'
import { breakpoints } from './constants'

const HideSmaller = styled.div`
	@media (min-width: ${props => props.width + 1}px) {
		display: none;
	}
`

const HideLarger = styled.div`
	@media (max-width: ${props => props.width}px) {
		display: none;
	}
`

export default class extends Component {
	state = {
		isSmaller: window.innerWidth <= this.props.width,
	}

	static defaultProps = {
		css: true,
		width: breakpoints.mobile,
	}

	handleResize = width => {
		this.setState({ isSmaller: window.innerWidth <= width })
	}

	render() {
		const { smaller, larger, width, css } = this.props
		const { isSmaller } = this.state
		return css ? (
			<Fragment>
				{smaller && <HideSmaller width={width}>{smaller}</HideSmaller>}
				{larger && <HideLarger width={width}>{larger}</HideLarger>}
			</Fragment>
		) : (
			<EventListener target="window" onResize={() => this.handleResize(width)}>
				{isSmaller ? smaller : larger}
			</EventListener>
		)
	}
}
