import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';
import FileTree from './FileTree';
import SectionWrapper from 'Components/Sections/SectionWrapper';
import CurrentFileBar from './CurrentFileBar';
import CodeView from './CodeView';
import { media } from 'utils/constants';

const CodeSectionWrapper = SectionWrapper.extend`
  ${media.mobile} {
    padding: 0;
    width: 100%;
  }
`;

const StyledCodeSection = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

class CodeSection extends Component {
  state = {
    isFileTreeVisible: false
  };

  toggleFileTree = () =>
    this.setState(prevState => ({isFileTreeVisible: !prevState.isFileTreeVisible}));

  hideFileTree = () => 
    this.setState({isFileTreeVisible: false});

  render() {
    const { projects, activeProject, files, currentFile, ...props } = this.props;
    const { isFileTreeVisible } = this.state;
    return (
      <CodeSectionWrapper {...props}>
        <ProjectList active={activeProject}>{projects}</ProjectList>
        <CurrentFileBar toggleHandler={this.toggleFileTree} url='asdf/fdsa/ddd' />
        <StyledCodeSection>
          <FileTree
            hideFileTree={this.hideFileTree}
            isVisible={isFileTreeVisible}
          >{files}</FileTree>
          <CodeView>
            {currentFile.text}
          </CodeView>
        </StyledCodeSection>
      </CodeSectionWrapper>
    );
  }
}
const CodeSectionForDebugging = ({ ...props }) => (
  <CodeSection
    {...props}
    projects={[
      {name: 'This portfolio', url: ''},
      {name: 'Another project', url: ''}
    ]}
    activeProject={0}
    files={{
      folder: {
        children: {
          'Active file.js': {
            isActive: true,
            kind: 'file'
          },
          'Inactive file.json': {
            isActive: false,
            kind: 'file'
          },
          'Another file.css': {
            isActive: false,
            kind: 'file'
          }
        },
        kind: 'folderOpen'
      },
      'README.md': {
        kind: 'file'
      }
    }}
    currentFile={{
      url: 'asdf/fdsa',
      text: [
"// @flow",
"import React, { Fragment, Component } from 'react';",
"import { ThemeProvider } from 'styled-components';",
"import Menu from '../Menu';",
"import { HomeSection, SkillSection, StyledCodeSection } from '../Sections';",
"import { defaultTheme } from './theme';",
"",
"type State = {",
"  activeSection: number,",
"};",
"",
"export default class extends Component<void, State> {",
"  state = {",
"    activeSection: 0",
"  };",
"",
"  changeSection = (",
"    to: number | number => number",
"  ) => {",
"    this.setState(state => ({",
"      activeSection: typeof to === 'number' ? to : to(state.activeSection)",
"    }));",
"  }",
"  ",
"  render() {",
"    const { activeSection } = this.state;",
"    return (",
"      <ThemeProvider theme={defaultTheme}>",
"        <Fragment>",
"          <HomeSection />",
"          <SkillSection />",
"          <StyledCodeSection />",
"          <Menu",
"            activeSection={activeSection}",
"            onClick={this.changeSection}",
"          >{[",
"            'Home',",
"            'Skills',",
"            {",
"              mobile: 'My code',",
"              desktop: 'Look at my code'",
"            },",
"            'Contact'",
"          ]}</Menu>",
"        </Fragment>",
"      </ThemeProvider>",
"    );",
"  }",
"}",
      ].join('\n')
    }}
  />
);

export default CodeSectionForDebugging;