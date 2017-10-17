
import * as APIUtil from '../util/blog_post_util';

export const RECEIVE_BLOG_POST = 'RECEIVE_BLOG_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const addBlogPost = post => ({
  type: RECEIVE_BLOG_POST,
  post
})

export const receiveAllPosts = allPosts => ({
  type: RECEIVE_ALL_POSTS,
  allPosts
})

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post).then(post => (
      dispatch(addBlogPost(post))),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
  )
)

export const fetchAllPosts = () => dispatch => (
  APIUtil.fetchPosts().then(allPosts => (
    dispatch(receiveAllPosts(allPosts))
  ), err => dispatch(receiveErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(addCommentToPost(comment))
  ), err => dispatch(receiveErrors(err.responseJSON))
  )
)