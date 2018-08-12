import React, { Component } from 'react';
import WithBlinkingCursor from './WithBlinkingCursor';

export default class TypingAnimation extends Component {
  state = {
    currentText: '',
    isTyping: false,
    intervalId: null,
    timeoutId: null
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
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if(this.state.currentText.length === text.length) {
          clearInterval(intervalId);
          this.setState({isTyping: false});
          resolve()
        } else {
          this.setState({currentText: text.slice(0, this.state.currentText.length + 1)});
        }
        this.setState({intervalId});
      }, 1000 / speed);
      this.setState({isTyping: true});
    }, delay)
    this.setState({timeoutId});
  });

  untypeText =({ delay, speed }) => new Promise(resolve => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if(this.state.currentText === '') {
          clearInterval(intervalId);
          this.setState({isTyping: false});
          resolve()
        } else {
          this.setState(state => ({currentText: state.currentText.slice(0, -1)}));
        }
        this.setState({intervalId});
      }, 100);
      this.setState({isTyping: true});
    }, delay)
    this.setState({timeoutId});
  });

  componentDidMount() {
    this.animateTyping(this.props.children, 0);
  }

  componentWillUnmount() {
    this.state.intervalId && clearInterval(this.state.intervalId);
    this.state.timeoutId && clearTimeout(this.state.timeoutId);
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