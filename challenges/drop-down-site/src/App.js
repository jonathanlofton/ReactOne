import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forceChange: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(header) {
    header.hidden.true = header.hidden.true ? false : true 
    this.setState({
      forceChange: this.state.forceChange ? false : true 
    })
    console.log(header)
  }
  
  render() {
    console.log(Data)
    let hiddenContent;
    const doodoo = Data.map((header, idx) => (
      <li>
        <li key={idx} onClick={() => this.handleClick(header)}>
          {header.header}
        </li>
        <p>
          {hiddenContent = header.hidden.true ? null : header.hidden.content}
        </p>
      </li>
    ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {doodoo}
        </ul>
      </div>
    );
  }
}

export default App;
// {
//   Data.map((header, idx) => (
//     <li key={idx} onClick={() => this.handleClick(header)}>
//       {header.id}
//       {header.header}
//     </li>
//   ))
// }