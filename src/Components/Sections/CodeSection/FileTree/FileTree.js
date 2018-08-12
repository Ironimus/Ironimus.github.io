import React, { Fragment } from 'react';
import { FileTree, Element } from './Styled';

const makeTree = (subtree, props, depth = 0) =>
  Object.keys(subtree).map(leafKey => (
    <Fragment key={leafKey}>
      <Element
        kind={subtree[leafKey].kind}
        isActive={subtree[leafKey].isActive}
        depth={depth}
        {...props}
      >{leafKey}</Element>
      {subtree[leafKey].children &&
        makeTree(subtree[leafKey].children, props, depth + 1)}
    </Fragment>
  ));

export default ({ children, isVisible, hideFileTree }) => (
  <FileTree isVisible={isVisible}>
    {makeTree(children, {onClick: hideFileTree})}
  </FileTree>
);