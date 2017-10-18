import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { createPost, fetchAllPosts, deletePost } from '../../actions/blog_post_actions';

const mapStateToProps = ({session, blogPosts}) => ({
  session,
  blogPosts
})

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  deletePost: (post) => dispatch(deletePost(post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);