import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.completedTodo = this.completedTodo.bind(this)
  }
  
  completedTodo(todo) {
    todo.finished = todo.finished ? false : true
    const newList = Object.assign({}, this.state.todos, { [todo.id]: todo })
    this.setState({ todos: newList })
  }

  render() {
    console.log(this.props.todo)
    const { todo } = this.props;
    return(
      <li key={todo.id}>
        <p style={{ fontSize: 20 }}>
          {todo.title}
        </p>
        <p>{todo.body}</p>
        <button
          style={{ background: todo.finished ? 'green' : 'red' }}
          onClick={() => this.completedTodo(todo)}
        >
          {todo.finished ? 'completed' : 'incomplete'}
        </button>
      </li>
    )  
  }
}

export default TodoItem