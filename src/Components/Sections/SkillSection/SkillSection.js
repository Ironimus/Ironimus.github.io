import React from 'react';
import SectionWrapper from 'Components/Sections/SectionWrapper';
import PercentageList from './Percentage';
import { Media } from 'utils';
import { breakpoints } from 'utils/constants';

const SkillSection = (props) => (
<SectionWrapper {...props}>
  <Media
    width={breakpoints.mobile} 
    smaller={
      <h2>Skills</h2>
    }
  />
  <PercentageList>{[
    {text: 'HTML/CSS', value: 100},
    {text: 'JavaScript (es6, jsx, flow)', value: 95},
    {text: 'React', value: 95},
    {text: 'Redux', value: 90},
    {text: 'Redux thunk/saga/observable', value: 85},
    {text: 'Styled components', value: 95},
    {text: 'JSS', value: 95},
    {text: 'BEM', value: 90},
  ]}</PercentageList>
</SectionWrapper>
);

export default SkillSection;