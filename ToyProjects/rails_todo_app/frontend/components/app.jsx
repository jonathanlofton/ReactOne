import React from 'react';
import LoginContainer from './Login/login_container';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>HELLO REACT!</h1>
        <Route exact path="/" component={LoginContainer} />
      </div>
    )
  }
}

export default App;