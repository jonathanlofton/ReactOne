
import * as APIUtil from '../util/blog_post_util';

export const RECEIVE_BLOG_POST = 'RECEIVE_BLOG_POST';

export const addBlogPost = post => ({
  type: RECEIVE_BLOG_POST,
  post
})

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post).then(post => (
      dispatch(addBlogPost(post))),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
  )
)