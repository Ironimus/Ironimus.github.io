import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { media } from 'utils/constants';

class SectionWrapper extends Component {
  refForScroll = createRef();

  changeBounds = () => {
    const { offsetTop, offsetHeight } = this.refForScroll.current || {};
    this.props.changeBounds(offsetTop + offsetHeight);
  }

  componentDidMount() {
    this.changeBounds();
  }

  componentDidUpdate() {
    this.changeBounds();
  }

  render() {
    const { children, className } = this.props;
    return (
      <div ref={this.refForScroll} className={className}>{children}</div>
    );
  }
}

export default styled(SectionWrapper)`
  min-height: 100vh;
  position: relative;
  padding-left: 150px;
  width: calc(66.6% - 200px);
  overflow: hidden;
  ${media.mobile} {
    padding: 0 20px;
    width: calc(100% - 40px);
  }
`;