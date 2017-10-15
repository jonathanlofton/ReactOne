import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Scaffold from './LandingPage/scaffold';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Scaffold />
    </HashRouter>
  </Provider>
);

export default App;