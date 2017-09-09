import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      characters: null,
    }
    this.fetchResults = this.fetchResults.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.test = this.test.bind(this);
  }

  fetchResults(e) {
    this.setState({
      searchQuery: e.target.value
    })
    fetch(`https://swapi.co/api/people/?search=${e.target.value}`).then(function(response) {
     return response.json();
   }).then((response) => {this.handleSearch(response.results)});
  }

  handleSearch(char) {
    this.setState({
      characters: char
    })
    console.log(this.state.characters)
    this.test;
  }

  test() {
    let characters = this.state.characters
    return (
      <ul>
        {characters.map(character => <li>{character.name}</li>)}
      </ul>
    )
  }


  render() {
    if (this.state.characters === null) {
      return (
        <div className="App">
          <input
            ref={(input) => { this.searchInput = input; }}
            type={'text'}
            onChange={this.fetchResults}
            value={this.state.searchQuery}
            placeholder={'search'}
            >
          </input>
        </div>
      )
    }
    return (
      <div className="App">
        <input
          ref={(input) => { this.searchInput = input; }}
          type={'text'}
          onChange={this.fetchResults}
          value={this.state.searchQuery}
          placeholder={'search'}
          >
        </input>
        {this.test()}
      </div>
    );
  }
}

export default App;
