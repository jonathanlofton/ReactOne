import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { createPost, fetchAllPosts } from '../../actions/blog_post_actions';

const mapStateToProps = ({session}) => ({
  session
})

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);