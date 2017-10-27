import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  incrementCounter() {
    let value = this.state.counter + 1;
    this.setState({
      counter: value
    })
  }

  render() {
    return (
      <div className="App">
        <List increment={() => this.incrementCounter()} counterValue={this.state.counter}/>
      </div>
    );
  }
}

export default App;
