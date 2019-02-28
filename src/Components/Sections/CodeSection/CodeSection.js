import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectList from './ProjectList'
import FileTree from './FileTree'
import SectionWrapper from 'Components/Sections/SectionWrapper'
import CurrentFileBar from './CurrentFileBar'
import CodeView from './CodeView'
import { media } from 'utils/constants'
import { FetchData } from 'utils'
import { fetchFileTree, getFile, DEFAULT_FILE_URL } from './fetchCode'
import { findByUrl } from 'utils/functions'
import Loading from 'Components/Loading'

const CodeSectionWrapper = styled(SectionWrapper)`
	${media.mobile} {
		padding: 0;
		width: 100%;
	}
`

const StyledCodeSection = styled.div`
	height: 90vh;
	display: flex;
	position: relative;
`

class CodeSection extends Component {
	state = {
		isFileTreeVisible: false,
		fileTree: { isLoading: true },
		currentFileUrl: DEFAULT_FILE_URL,
	}

	toggleFileTree = () => this.setState(prevState => ({ isFileTreeVisible: !prevState.isFileTreeVisible }))

	hideFileTree = () => this.setState({ isFileTreeVisible: false })

	updateFileTree = fileTree => this.setState({ fileTree })

	updateCurrentFileUrl = currentFileUrl => this.setState({ currentFileUrl })

	render() {
		const { ...props } = this.props
		const { isFileTreeVisible, currentFileUrl, fileTree } = this.state
		return (
			<FetchData loadFunction={fetchFileTree} setDataState={this.updateFileTree}>
				{() => (
					<CodeSectionWrapper {...props}>
						<ProjectList>
							{{ name: 'This portfolio', link: 'github', url: 'https://github.com/Ironimus/portfolio' }}
							{{ name: 'Another project', link: 'soon' }}
						</ProjectList>
						<CurrentFileBar
							url={currentFileUrl}
							toggleHandler={this.toggleFileTree}
							updateCurrentFileUrl={this.updateCurrentFileUrl}
						/>
						<StyledCodeSection>
							<FileTree
								hideFileTree={this.hideFileTree}
								updateCurrentFileUrl={this.updateCurrentFileUrl}
								updateFileTree={this.updateFileTree}
								isVisible={isFileTreeVisible}
							>
								{!fileTree.isLoading && fileTree.data}
							</FileTree>
							{fileTree.isLoading ? (
								<Loading />
							) : (
								<FetchData
									loadFunction={getFile}
									args={{ url: currentFileUrl, fileTree: fileTree.data }}
									shouldUpdate={(prev, next) => prev.url !== next.url}
								>
									{file =>
										file.isLoading ? (
											<Loading />
										) : file.data ? (
											<CodeView highlight={findByUrl(currentFileUrl, fileTree.data).syntax}>
												{file.data}
											</CodeView>
										) : (
											'File is binary or empty'
										)
									}
								</FetchData>
							)}
						</StyledCodeSection>
					</CodeSectionWrapper>
				)}
			</FetchData>
		)
	}
}

export default CodeSection
