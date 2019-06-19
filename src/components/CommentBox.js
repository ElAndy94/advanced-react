import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

const Commentbox = props => {
  const [comment, setComment] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    props.saveComment(comment);
    setComment('');
  };

  return (
    <div>
      <form
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        className='fetch-comments'
        onClick={() => {
          props.fetchComments();
        }}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(
  null,
  actions
)(Commentbox);
