import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starwars: '',
      characters: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.searchStarwars = this.searchStarwars.bind(this);
    this.fetchStarWars = this.fetchStarWars.bind(this);
  }

  fetchStarWars() {
    if (this.state.starwars !== null) {
      fetch(`https://swapi.co/api/people/?search=${this.state.starwars}`)
        .then(response => { return response.json() })
        .then(characters => this.setState({
          characters: characters.results
        }))
    } else {
      this.setState({ characters: []})
    }
  }

  searchStarwars(e) {
    this.setState({ starwars: e.target.value })
    console.log(e.target.value)
    this.fetchStarWars()
  }

  handleClick(header) {
    header.hidden.true = header.hidden.true ? false : true 
    // will force the component to change
    this.setState({})
  }
  
  render() {
    let hiddenContent;
    const doodoo = Data.map((header, idx) => (
      <li key={idx}>
        <p onClick={() => this.handleClick(header)}>
          {header.header}
        </p>
        <p>
          {hiddenContent = header.hidden.true ? null : header.hidden.content}
        </p>
      </li>
    ))
    const starwars = this.state.characters
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {doodoo}
        </ul>
        <input type='text' onChange={this.searchStarwars}/>
        <ul>
          {starwars.map((character, idx) => (
            <li key={idx}>
              {character.name}
            </li>
          ))}
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