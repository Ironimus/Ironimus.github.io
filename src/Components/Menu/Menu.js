import React from 'react'
import { StyledMenu, MenuEntry } from './Styled'
import { Media } from 'utils'
import { breakpoints } from 'utils/constants'

const Menu = ({ children, onClick, theme, ...props }) => (
	<StyledMenu {...props}>
		{children.map((entry, i) => (
			<MenuEntry
				isActive={props.activeSection === i}
				itemsNumber={children.length}
				onClick={() => onClick(i)}
				key={i}
			>
				{typeof entry === 'string' ? (
					entry
				) : (
					<Media width={breakpoints.mobile} smaller={entry.mobile} larger={entry.desktop} />
				)}
			</MenuEntry>
		))}
	</StyledMenu>
)

export default Menu
