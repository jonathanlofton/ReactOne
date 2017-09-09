import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      characters: [],
    }
    this.fetchResults = this.fetchResults.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  fetchResults(e) {
    this.setState({
      searchQuery: e.target.value
    })
    fetch(`https://swapi.co/api/people/?search=${e.target.value}`).then(function(response) {
     return response.json();
   }).then((response) => {this.handleSearch(response)});
  }

  handleSearch(starWars) {
    if (!starWars) {
      return (
        <p>loading</p>
      )
    }
      this.setState({
        characters: starWars.results
      })
      console.log(this.state.characters)
      let characters = this.state.characters
      return (
        <ul>
          {characters.map(character => <li>{character.name}</li>)}
        </ul>
      )
  }


  render() {
    return (
      <div className="App">
        <input
          ref={(input) => { this.searchInput = input; }}
          type={'text'}
          onChange={(e) => {this.fetchResults(e)}}
          value={this.state.searchQuery}
          placeholder={'search'}
          >
        </input>
        {this.handleSearch()}
      </div>
    );
  }
}

export default App;
