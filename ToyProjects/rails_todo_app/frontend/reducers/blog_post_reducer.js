import merge from 'lodash/merge';

import { RECEIVE_BLOG_POST } from '../actions/blog_post_actions';

const nullState = Object.freeze({
  posts: null,
});

const BlogPostReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOG_POST:
      const { post } = action;
      return Object.assign({}, nullState, {
        posts: posts.push(post)
      });
    default:
      return state;
  }

};

export default BlogPostReducer;