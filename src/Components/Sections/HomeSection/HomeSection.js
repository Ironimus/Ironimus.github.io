import React from 'react';
import SectionWrapper from 'Components/Sections/SectionWrapper';
import styled from 'styled-components';
import { Media } from 'utils';
import ArrowDown from './ArrowDown';
import TypingAnimation from './TypingAnimation';
import { colors, breakpoints } from 'utils/constants';

const StyledHomeSection = SectionWrapper.extend`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  height: 50vh;
  padding-bottom: 100px;
`;

const Description = styled.p`
  font-weight: 100;
  word-break: break-all;
  padding-top: 20px;
`;

const SmallerH1 = styled.h1`
  font-size: 60px;
`;

const ColoredText = styled.span`
  color: ${colors.complementary};
`;

const HomeSection = props => (
  <StyledHomeSection {...props}>
    <ContentWrapper>
      <SmallerH1>Hi,</SmallerH1>
      <h1>I'm Stas</h1>
      <Description>Ask me about 
        <ColoredText>{' '}
          <TypingAnimation>{[
            'React/Redux',
            'functional programming',
            'JavaScript',
            'React or another library I should\'ve used instead',
            'frontend. I\'d be glad to answer literally any question'
          ]}</TypingAnimation>
        </ColoredText>
      </Description>
    </ContentWrapper>
      <Media
        width={breakpoints.mobile}
        larger={<ArrowDown>Skills</ArrowDown>}
      />
  </StyledHomeSection>
);

export default HomeSection;