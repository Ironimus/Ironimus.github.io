import React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/constants';

const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Element = styled.h4`
  cursor: pointer;
  padding-bottom: 7px;
  border-bottom: ${props => props.active ? 4 : 0}px solid ${colors.complementary};
`;

export default ({ children, active }) => (
  <ProjectList>
    {children.map((project, i) => (
      <Element key={i} active={active === i}>{project.name}</Element>
    ))}
  </ProjectList>
);