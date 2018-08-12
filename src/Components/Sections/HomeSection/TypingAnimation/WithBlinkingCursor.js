import styled, { keyframes, css } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
`

export default styled.span`
  ::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 20px;
    margin-left: 3px;
    background-color: #fff;
    vertical-align: baseline;
    ${props => !props.stopped &&
      css`animation: ${blink} 1s linear infinite;`
    }
  }
`