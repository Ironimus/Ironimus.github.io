import React, { Component } from 'react';
import styled from 'styled-components';

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding-right: ${props => props.padding}px;
  padding-bottom: ${props => props.padding}px;
  overflow: auto;
  ${props => props.innerStyle && props.innerStyle(props)}
`;

const Outer = styled.div`
  height: 90vh;
  overflow: hidden;
  box-shadow: inset -10px -10px 5px -5px rgba(0, 0, 0, .1);
  ${props => props.outerStyle && props.outerStyle(props)}
`;

export default class extends Component {
  ref = React.createRef();
  state = {
    padding: 0
  };

  componentDidMount() {
    this.setState({
      padding: this.ref.offsetWidth - this.ref.clientWidth
    });
  }

  render() {
    const { outerStyle, innerStyle } = this.props;
    return (
      <Outer outerStyle={outerStyle}>
        <Inner
          innerRef={x => this.ref = x}
          padding={this.state.padding}
          innerStyle={innerStyle}
        >
          {this.props.children}
        </Inner>
      </Outer>
    );
  }
}