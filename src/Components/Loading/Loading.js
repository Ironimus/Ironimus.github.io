import React from 'react';
import TypingAnimation from 'Components/TypingAnimation';
import styled from 'styled-components';

const StyledLoading = styled.p`
  padding: 10px 20px;
`;

const Loading = () => (
  <StyledLoading>
    <TypingAnimation typeSpeed={12}>
      {'Loading...'}
      {'...'}
      {'If you see this text this far it probably isn\'t my mistake, check your internet connection'}
    </TypingAnimation>
  </StyledLoading>
);

export default Loading;