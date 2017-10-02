import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import RedditFeed from './reddit/reddit_feed';
import PodcastFeed from './podcasts/podcast_feed';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import Footer from './footer/footer';
import './css/App.css';
import './css/reddit-item.css';
import './css/header.css';
import './css/body.css';
import './css/sidebar.css';
import './css/footer.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <Route path='/' component={Header} />
        </div>
        <div className='sidebar'>
          <Route path='/' component={SideBar} />
        </div>
        <div className='body'>
          <Route path='/reddit' component={RedditFeed} />
          <Route path='/podcast' component={PodcastFeed} />
        </div>
        <div className='footer'>
          <Route path='/' component={Footer} />
        </div>
      </div>
    );
  }
}

export default App;