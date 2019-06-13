import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  //   console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});

it('LI is showing right text', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
  //   console.log(wrapped.render().text());
  //   console.log(wrapped.find('li').length);
  //   console.log(wrapped.find('li').prop('value')).toEqual('Comment 1');
  //   console.log(wrapped.find('li').Contains(initialState.comments));
});
