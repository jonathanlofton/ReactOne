import React, { Component } from 'react';
import RedditFeed from './reddit/reddit_feed';
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
          <Header />
        </div>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='body'>
            <RedditFeed />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
