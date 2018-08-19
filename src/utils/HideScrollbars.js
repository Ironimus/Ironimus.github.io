import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding-right: ${props => props.padding || 0}px;
  padding-bottom: ${props => props.padding || 0}px;
  overflow: scroll;
  ${props => props.padding === null && css`
    ::before {
      content: '';
      display: block;
      height: calc(100% + 1px);
      width: calc(100% + 1px);
    }
  `}
  ${props => props.innerStyle && props.innerStyle(props)}
`;

const Outer = styled.div`
  overflow: hidden;
  box-shadow: inset -10px -10px 5px -5px rgba(0, 0, 0, .1);
  ${props => props.outerStyle && props.outerStyle(props)}
`;

export default class extends Component {
  ref = React.createRef();
  state = {
    padding: null
  };

  componentDidMount() {
    this.setState({
      padding: this.ref.offsetWidth - this.ref.clientWidth
    });
  }

  render() {
    const { outerStyle, innerStyle, ...props } = this.props;
    return (
      <Outer outerStyle={outerStyle} {...props}>
        <Inner
          innerRef={x => this.ref = x}
          padding={this.state.padding}
          innerStyle={innerStyle}
          {...props}
        >
          {this.props.children}
        </Inner>
      </Outer>
    );
  }
}