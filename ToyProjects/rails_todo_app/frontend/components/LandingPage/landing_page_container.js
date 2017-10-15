import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { createPost } from '../../actions/blog_post_actions';

const mapStateToProps = ({session}) => ({
  session
})

const mapDispatchToProps = dispatch => ({
  createPost: (post) => createPost(post)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);