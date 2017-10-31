import React from 'react';
import LandingPageContainer from './landing_page_container';
import LoginContainer from '../Login/login_container';
import Header from '../Header/header';
import { Route } from 'react-router-dom';

class Scaffold extends React.Component {
  render() {
    return (
      <div className="landing-page">
          <Route path="/" component={Header} />
        <div className="body">
          <Route exact path="/" component={LoginContainer} />
          <Route path="/home" component={LandingPageContainer} />
        </div>
        <div className="sidebar">
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}

export default Scaffold;