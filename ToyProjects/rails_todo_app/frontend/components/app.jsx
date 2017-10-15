import React from 'react';
import LoginContainer from './Login/login_container';
import Scaffold from './LandingPage/scaffold';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
        <Scaffold />
    )
  }
}

export default App;