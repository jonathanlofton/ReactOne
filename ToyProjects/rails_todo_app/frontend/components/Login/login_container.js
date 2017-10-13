import signup from '../../actions/session_action';
import Login from './login';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  session: session,
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(signup(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);