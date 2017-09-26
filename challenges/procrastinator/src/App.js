import React, { Component } from 'react';
import logo from './logo.svg';
import RedditFeed from './reddit_feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RedditFeed />
      </div>
    );
  }
}

export default App;
