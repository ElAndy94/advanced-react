import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
  return (
    <React.Fragment>
      <CommentBox />
      <CommentList />
    </React.Fragment>
  );
};
