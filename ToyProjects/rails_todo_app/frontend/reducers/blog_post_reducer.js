import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS } from '../actions/blog_post_actions';

const nullState = Object.freeze({
  posts: [],
});

const BlogPostReducer = (state = nullState, action) => {
  Object.freeze(state);
  console.log(action)
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const { allPosts } = action;
      const posts = state.posts.concat(allPosts)
      return Object.assign({}, nullState, {
        posts
      });
    default:
      return state;
  }

};

export default BlogPostReducer;