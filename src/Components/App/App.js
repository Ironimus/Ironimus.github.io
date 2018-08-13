import React, { Fragment, Component } from 'react';
import EventListener from 'react-event-listener';
import './Styled';
import Menu from 'Components/Menu';
import * as Sections from 'Components/Sections';
import { smoothScroll } from 'utils/functions';

export default class extends Component {
  state = {
    activeSection: 0,
    sectionsRefs: [],
    checkScroll: true
  };

  changeSection = to => {
    this.setState(prevState => {
      if(prevState.activeSection === to) {
        return;
      }
      return {
        activeSection: to
      };
    });
  };

  setSectionRef = i => newRef => {
    this.setState(prevState => {
      const newRefs = [...prevState.sectionsRefs];
      newRefs[i] = newRef;
      return {
        sectionsRefs: newRefs
      };
    });
  }

  scrollToSection = (toSection) => {
    const { activeSection, sectionsRefs } = this.state;
    const nextSection = typeof toSection === 'number' 
      ? toSection 
      : toSection(activeSection);
    this.changeSection(nextSection);
    this.setState({checkScroll: false})
    smoothScroll(sectionsRefs[nextSection].current.offsetTop)
      .then(() => this.setState({checkScroll: true}));
  }

  scrollHandler = () => {
    if(!this.state.checkScroll) {
      return;
    }
    requestAnimationFrame(() =>
    // works same as lodash'/underscore's trottle(cb, 16) here.
    this.changeSection(
        this.state.sectionsRefs.findIndex(sectionRef => {
          const {offsetTop, offsetHeight } = sectionRef.current;
          // assume every next section is below previous one
          // to avoid unnecessary DOM calls.
          return offsetTop + offsetHeight > window.scrollY + window.innerHeight * .5
          }
        )
      )
    );
  };
  
  render() {
    const { activeSection } = this.state;
    return (
      <Fragment>
        <EventListener
          target='window'
          onScroll={this.scrollHandler}
        />
          {Object.values(Sections).map((Section, i) => (
            <Section
              changeSection={this.changeSection}
              setSectionRef={this.setSectionRef(i)}
              key={i}
            />
          ))}
        <Menu
          activeSection={activeSection}
          onClick={this.scrollToSection}
        >{[
          'Home',
          'Skills',
          {
            mobile: 'My code',
            desktop: 'Look at my code'
          },
          'Contact'
        ]}</Menu>
      </Fragment>
    );
  }
}