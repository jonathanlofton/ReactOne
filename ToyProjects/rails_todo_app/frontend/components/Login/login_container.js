import signup from '../../actions/session_action';
import Login from './login';

const mapStateToProps = ({ session }) => ({
  session,
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(signup(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);