import React, { Component } from 'react';
import logo from './logo.svg';
import {Data} from './data';
import Content from './content';
import './App.css';

class App extends Component {

  
  render() {
    
    const content = Data.map((content, idx) => <Content key={idx} data={content} />)

    return (
      <div className="App">
        <ul>
          List of Data
          { content }
        </ul>
      </div>
    );
  }
}

export default App;
