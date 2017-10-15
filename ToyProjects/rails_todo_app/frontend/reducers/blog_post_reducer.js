import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS } from '../actions/blog_post_actions';

const nullState = Object.freeze({
  allPosts: [],
});

const BlogPostReducer = (state = nullState, action) => {
  Object.freeze(state);
  console.log(action)
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const { allPosts } = action;
      return Object.assign({}, state,
        { allPosts }
      );
    default:
      return state;
  }

};

export default BlogPostReducer;