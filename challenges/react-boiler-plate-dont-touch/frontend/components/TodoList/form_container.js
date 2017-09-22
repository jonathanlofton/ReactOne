import { connect } from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions';
import Form from './form';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);