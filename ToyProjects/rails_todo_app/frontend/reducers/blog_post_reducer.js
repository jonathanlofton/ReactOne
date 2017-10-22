import merge from 'lodash/merge';

import { RECEIVE_ALL_POSTS, REMOVE_POST, ADD_COMMENT_TO_POST } from '../actions/blog_post_actions';

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
    case ADD_COMMENT_TO_POST:
      const { comment } = action;
      console.log(state)
      let blog_post = state.blogPosts.allPosts[comment.blog_post_id]
      return Object.assign({}, state,
        blog_post.comments.push(comment)
      )
    default:
      return state;
  }

};

export default BlogPostReducer;