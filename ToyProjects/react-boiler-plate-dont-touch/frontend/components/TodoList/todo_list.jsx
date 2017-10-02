import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.handleTask = this.handleTask.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleTask(todo) {
    const newTodo = todo.done ? Object.assign({}, todo, { done: false }) : Object.assign({}, todo, { done: true })
    this.props.receiveTodo(newTodo)
  }

  removeTodo(todo) {
    this.props.removeTodo(todo)
  }

  render() {
    const { todos } = this.props 
    const array = Object.keys(todos).map(id => todos[id])
    
    return(
      <div>
        <h1>Todo List</h1>
        <ul>
          {array.map(todo => (
            <li key={todo.id}>
              <h2>{`${todo.id} ${todo.title}`}</h2>
              <h3>{todo.body}</h3>
              <button onClick={() => this.handleTask(todo)}>{`completed? ${todo.done}`}</button>
              <button onClick={() => this.removeTodo(todo)} >remove</button>
            </li>
          ))}
          </ul>
      </div>
    )
  }
}

export default TodoList;