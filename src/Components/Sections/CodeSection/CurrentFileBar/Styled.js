import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { colors } from 'utils/constants';

export const StyledBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;
  margin-top: 30px;
  background-color: ${darken(.05, colors.background)};
  font-size: 20px;
  z-index: 2;
`;

export const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  color: ${transparentize(.2, colors.text)};
`;

const ResetButtonStyles = styled.button`
  border: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const BreadcrumbStep = ResetButtonStyles.extend`
  &:hover {
    text-decoration: underline;
  }
`;

export const FileListButton = ResetButtonStyles.extend`
  height: 100%;
`;

export const ArrowDownButtonSvg = styled.svg`
  width: 12px;
  height: 8px;
  padding: 10px;
  vertical-align: middle;
`;
