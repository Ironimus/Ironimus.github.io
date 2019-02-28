import React, { Fragment } from 'react'
import Percentage from './Percentage'

export default ({ children }) => (
	<Fragment>{children.map((props, i) => <Percentage {...props} key={i} id={i} />)}</Fragment>
)
