import React from 'react';
import {
  FileListButton,
  Breadcrumbs,
  StyledBar,
  ArrowDownButtonSvg
} from './Styled';
import { Media } from 'utils';
import { breakpoints } from 'utils/constants';

const ShowFileList = ({ children, onClick }) => (
  <FileListButton onClick={onClick}>
    {children}
    <ArrowDownButtonSvg>
      <path opacity='0.54' fillRule='evenodd' clipRule='evenodd' d='M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z' transform='translate(0 0.6)' fill='#E5E5E5'/>
    </ArrowDownButtonSvg>
  </FileListButton>
);

const CurrentFileBar = ({ url, toggleHandler }) => (
  <StyledBar>
    <Breadcrumbs>{url}</Breadcrumbs>
    <Media 
        width={breakpoints.fileTreeVisibility}
        smaller={
          <ShowFileList onClick={toggleHandler}>File list</ShowFileList>
        }
      />
  </StyledBar>
);

export default CurrentFileBar;