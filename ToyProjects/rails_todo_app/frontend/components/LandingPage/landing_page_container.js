import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { createPost, fetchAllPosts, deletePost, createComment, createCommentOnComment } from '../../actions/blog_post_actions';
import { blogPostSelector } from '../../reducers/selectors';

const mapStateToProps = ({ session, blogPosts }) => ({
  session,
  blogPosts: blogPostSelector(blogPosts)
})

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  deletePost: (post, idx) => dispatch(deletePost(post, idx)),
  createComment: (comment) => dispatch(createComment(comment)),
  createCommentOnComment: (comment) => dispatch(createCommentOnComment(comment)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);