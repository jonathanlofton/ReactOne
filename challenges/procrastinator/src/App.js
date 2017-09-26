import React, { Component } from 'react';
import RedditFeed from './reddit_feed';
import './App.scss';
import './reddit-item.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header'>
        </div>
        <div className='sidebar'>
        </div>
        <div className='body'>
          <RedditFeed />
        </div>
        <div className='footer'>
        </div>
      </div>
    );
  }
}

export default App;
