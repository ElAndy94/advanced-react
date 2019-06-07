import React, { useState } from 'react';

const Commentbox = () => {
  const [comment, setComment] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    setComment('');
  };

  return (
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
  );
};

export default Commentbox;
