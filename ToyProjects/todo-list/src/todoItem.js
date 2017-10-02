import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.completedTodo = this.completedTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentWillMount() {
    this.setState({todos: this.props.Data})
  }
  
  completedTodo(todo) {
    todo.finished = todo.finished ? false : true
    const newList = Object.assign({}, this.state.todos, { [todo.id]: todo })
    this.setState({ todos: newList })
  }

  removeTodo(todo) {
    let currentTodos = this.state.todos;
    let newList = currentTodos.filter(todos => todos.title !== todo.title)
    console.log(newList)
    this.setState({ todos: newList })
    console.log(this.state)
  }

  render() {
    const { Data } = this.props;
    const items = Data.map((todo, idx) => (
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
        <button onClick={() => this.removeTodo(todo)}>
          Remove Todo
        </button>
      </li>
    ))
    return(
      <div>
        {items}
      </div>
    )  
  }
}

export default TodoItem