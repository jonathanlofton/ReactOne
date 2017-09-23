import React, { Component } from 'react';
import TodoItem from './todoItem';
import Form from './Form';
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
  }

  componentWillMount() {
    this.setState({
      todos: Data
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Form state={this.state.todos}/>
      </div>
    );
  }
}

export default App;
