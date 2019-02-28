import React from 'react'
import SectionWrapper from 'Components/Sections/SectionWrapper'
import PercentageList from './Percentage'
import { Media } from 'utils'
import { breakpoints } from 'utils/constants'

const SkillSection = props => (
	<SectionWrapper {...props}>
		<Media width={breakpoints.mobile} smaller={<h2>Skills</h2>} />
		<PercentageList>
			{{ text: 'JavaScript (es6, jsx)', value: 95 }}
			{{ text: 'React', value: 100 }}
			{{ text: 'Redux', value: 95 }}
			{{ text: 'Material-ui', value: 95 }}
			{{ text: 'HTML/CSS', value: 100 }}
			{{ text: 'Redux thunk/saga', value: 90 }}
			{{ text: 'Styled components/JSS', value: 95 }}
			{{ text: 'BEM', value: 90 }}
			{{ text: 'Vim', value: 100 }}
		</PercentageList>
	</SectionWrapper>
)

export default SkillSection
