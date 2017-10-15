import merge from 'lodash/merge';

import { RECEIVE_BLOG_POST } from '../actions/blog_post_actions';

const nullState = Object.freeze({
  posts: [],
});

const BlogPostReducer = (state = nullState, action) => {
  Object.freeze(state);
  console.log(action)
  switch (action.type) {
    case RECEIVE_BLOG_POST:
      const { post } = action;
      const posts = state.posts.concat(post)
      return Object.assign({}, nullState, {
        posts
      });
    default:
      return state;
  }

};

export default BlogPostReducer;