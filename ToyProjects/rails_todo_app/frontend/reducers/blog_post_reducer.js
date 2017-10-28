import merge from 'lodash/merge';

import { RECEIVE_BLOG_POST, RECEIVE_ALL_POSTS, REMOVE_POST, ADD_COMMENT_TO_POST } from '../actions/blog_post_actions';

const BlogPostReducer = (state = {}, action) => {
  Object.freeze(state);
  const { allPosts, post } = action;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const nextState = {};
      action.allPosts.forEach(todo => nextState[todo.id] = todo);
      return nextState
    case RECEIVE_BLOG_POST:
      console.log(post)
      const newTodo = {[post.id]: post }
      return Object.assign({}, state, newTodo)
    case REMOVE_POST:
      let newState = Object.assign({}, state);
      delete newState[post.id];
      return newState;
    case ADD_COMMENT_TO_POST:
      let blogPosts = state;
      blogPosts[74].comments.push(action.comment)
      return Object.assign({}, state, blogPosts)
    default:
      return state;
  }

};

export default BlogPostReducer;