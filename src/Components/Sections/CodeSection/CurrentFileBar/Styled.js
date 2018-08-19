import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { colors } from 'utils/constants';

export const StyledBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;
  margin-top: 5px;
  background-color: ${darken(.03, colors.background)};
  font-size: 20px;
  z-index: 2;
`;

export const Breadcrumbs = styled.div`
  color: ${transparentize(.2, colors.text)};
  direction: rtl;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 64px;
`;

export const FileListButton = styled.button`
  height: 100%;
  width: 100px;
  margin-left: 20px;
  border: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const ArrowDownButtonSvg = styled.svg`
  width: 12px;
  height: 8px;
  padding: 10px;
  vertical-align: middle;
`;
