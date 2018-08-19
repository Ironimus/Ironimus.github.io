import React, { Component } from 'react';
import WithBlinkingCursor from './WithBlinkingCursor';

export default class TypingAnimation extends Component {
  state = {
    currentText: '',
    isTyping: false
  };

  animateTyping(items, currentItem) {
    const { delayBefore, delayAfter, typeSpeed, untypeSpeed } = this.props;
    this.typeText({
      text: items[currentItem],
      delay: delayBefore || 1000,
      speed: typeSpeed || 7
    })
      .then(() => this.untypeText({
        delay: delayAfter || 2000,
        speed: untypeSpeed || 20
      }))
      .then(() => this.animateTyping(
        items,
        currentItem === items.length - 1 ? 0 : currentItem + 1)
      );
  }

  typeText = ({ text, delay, speed }) => new Promise(resolve => {
    this.timeoutId = setTimeout(() => {
      this.intervalId = setInterval(() => {
        if(this.state.currentText.length === text.length) {
          clearInterval(this.intervalId);
          this.setState({isTyping: false});
          resolve()
        } else {
          this.setState({currentText: text.slice(0, this.state.currentText.length + 1)});
        }
      }, 1000 / speed);
      this.setState({isTyping: true});
    }, delay)
  });

  untypeText =({ delay, speed }) => new Promise(resolve => {
    this.timeoutId = setTimeout(() => {
      this.intervalId = setInterval(() => {
        if(this.state.currentText === '') {
          clearInterval(this.intervalId);
          this.setState({isTyping: false});
          resolve()
        } else {
          this.setState(state => ({currentText: state.currentText.slice(0, -1)}));
        }
      }, 100);
    }, delay)
  });

  componentDidMount() {
    this.animateTyping(this.props.children, 0);
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
    this.timeoutId && clearTimeout(this.timeoutId);
  }

  render() {
    const { currentText, isTyping } = this.state;
    return (
      <WithBlinkingCursor stopped={isTyping}>
        {currentText}
      </WithBlinkingCursor>
    );
  }
}