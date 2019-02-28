import React, { Fragment } from 'react'
import { FileTreeWrap, Element } from './Styled'
import { changeTreeElement } from 'utils/functions'

const makeTree = (subtree, props, fullTree = subtree, depth = 0) =>
	subtree.map(leaf => (
		<Fragment key={leaf.oid}>
			<Element
				iconType={leaf.iconType}
				isActive={leaf.isActive}
				depth={depth}
				onClick={() => {
					if (leaf.children) {
						props.updateFileTree({
							data: changeTreeElement(
								fullTree,
								e => e.url === leaf.url,
								({ isOpen }) => ({
									isOpen: !isOpen,
									iconType: isOpen ? 'folderClosed' : 'folderOpen',
								})
							),
						})
					} else {
						props.hideFileTree()
						props.updateCurrentFileUrl(leaf.url)
						const removeOldActive = changeTreeElement(fullTree, e => e.isActive, { isActive: false })
						const setNewActive = changeTreeElement(removeOldActive, e => e.url === leaf.url, {
							isActive: true,
						})
						props.updateFileTree({
							data: setNewActive,
						})
					}
				}}
				{...props}
			>
				{leaf.name}
			</Element>
			{leaf.children && leaf.isOpen && makeTree(leaf.children, props, fullTree, depth + 1)}
		</Fragment>
	))

const FileTree = ({ children, isVisible, hideFileTree, updateCurrentFileUrl, updateFileTree }) => (
	<FileTreeWrap isVisible={isVisible}>
		{Array.isArray(children)
			? makeTree(children, { hideFileTree, updateCurrentFileUrl, updateFileTree })
			: children}
	</FileTreeWrap>
)

export default FileTree
