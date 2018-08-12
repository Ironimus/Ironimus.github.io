import React, { Fragment, Component } from 'react';
import EventListener from 'react-event-listener';
import debounce from 'debounce';
import './Styled';
import Menu from 'Components/Menu';
import * as Sections from 'Components/Sections';
import { smoothScroll } from 'utils/functions';

export default class extends Component {
  state = {
    activeSection: 0,
    sectionsBounds: []
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

  changeSectionBounds = i => changeTo => {
    this.setState(prevState => {
      if(prevState.sectionsBounds[i] === changeTo) {
        return;
      }
      const newBounds = [...prevState.sectionsBounds];
      newBounds[i] = changeTo;
      return {
        sectionsBounds: newBounds
      };
    });
  }

  scrollToSection = (toSection) => {
    const { activeSection, sectionsBounds } = this.state;
    const nextSection = typeof toSection === 'number' 
      ? toSection 
      : toSection(activeSection);
    if(sectionsBounds[nextSection] === undefined) {
      return;
    }
    this.changeSection(nextSection);
    smoothScroll(sectionsBounds[nextSection - 1] || 0);
  }
  

  scrollHandler = () => {
    this.changeSection(
      this.state.sectionsBounds.findIndex(sectionBound => 
        sectionBound > window.scrollY + window.innerHeight * .5
      )
    );
  };
  
  render() {
    const { activeSection } = this.state;
    return (
      <Fragment>
        <EventListener
          target='window'
          onScroll={debounce(this.scrollHandler, 50)}
        />
          {Object.values(Sections).map((Section, i) => (
            <Section
              changeSection={this.changeSection}
              changeBounds={this.changeSectionBounds(i)}
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