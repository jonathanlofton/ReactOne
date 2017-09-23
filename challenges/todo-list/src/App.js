import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      title: '',
      body: ''
    }
    this.createTodo = this.createTodo.bind(this)
    this.completedTodo = this.completedTodo.bind(this)
  }

  componentWillMount() {
    this.setState({
      todos: Data
    })
  }

  completedTodo(todo) {
    console.log(todo)
    const completed = todo.finished ? false : true 
    todo.finished = completed
    const newList = Object.assign({}, this.state.todos, { [todo.id]: todo})
    this.setState({ todos: newList })
  }

  createTodo(e) {
    e.preventDefault();

    let newTodo = {
      title: this.state.title,
      body: this.state.body,
      finished: false
    }
    
    let newState = this.state.todos
    newState.push(newTodo)
    
    this.setState({
      todos: newState,
      title: '',
      body: ''
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul style={{listStyleType: 'none'}}>
          {Data.map((todo, idx) => (
            <li key={idx}>
              <p style={{ fontSize: 20 }}>
                {todo.title}
              </p>
              <p>{todo.body}</p>
              <button 
                style={{ background: todo.finished ? 'green' : 'red'}} 
                onClick={() => this.completedTodo(todo)}
                >
                {todo.finished ? 'completed' : 'incomplete'}
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.createTodo} style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: 300 }}>
          Title: <input type='text' value={this.state.title} onChange={ e => this.setState({ title: e.target.value })}/>
          Body: <input type='text' value={this.state.body} onChange={ e => this.setState({ body: e.target.value })}/>
          <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default App;
