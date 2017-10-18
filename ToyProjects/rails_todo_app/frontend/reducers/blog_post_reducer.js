import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/blog_post_actions';

const nullState = Object.freeze({
  allPosts: [],
});

const BlogPostReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const { allPosts } = action;
      return Object.assign({}, state,
        { allPosts }
      );
    case REMOVE_POST:
      const { post } = action;
      console.log(state)
    default:
      return state;
  }

};

export default BlogPostReducer;