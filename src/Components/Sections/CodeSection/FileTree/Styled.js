import styled, { css } from 'styled-components';
import icons from './icons';
import { colors, breakpoints } from 'utils/constants';

export const FileTree = styled.div`
  width: 33.3%;
  padding: 10px 0 0 20px;
  @media (max-width: ${breakpoints.fileTreeVisibility}px) {
    opacity: 0;
    transform: translateY(-20px);
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 25px;
    position: absolute;
    top: 0;
    pointer-events: none;
    transition: transform .3s, opacity .2s .1s;
    ${props => props.isVisible && css`
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
      z-index: 999;
    `}
  }
`;

export const Element = styled.div`
  color: ${props => props.isActive && '#fff'};
  font-size: 16px;
  font-weight: lighter;
  padding: 5px 5px 5px ${props => props.depth * 10}px;
  cursor: pointer;
  ::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 7px;
    vertical-align: -8%;
    background: url('${props => icons[props.kind]}') no-repeat center;
  }
  @media (max-width: ${breakpoints.fileTreeVisibility}px) {
    font-size: 20px;
    ::before {
      width: 22px;
      height: 22px;
    }
  }
`;
