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
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.characterResults = this.characterResults.bind(this);
  }

  fetchCharacters(e) {
    this.setState({
      searchQuery: e.target.value
    })

    fetch(`https://swapi.co/api/people/?search=${e.target.value}`)
    .then(response => { return response.json(); })
    .then(response => {this.setState({ characters: response.results })})
    .then(() => {this.characterResults});
  }

  characterResults() {
    let { characters, searchQuery } = this.state;

    if (searchQuery === "" || characters === null) {
      return <ul></ul>
    }

    return (
      <ul>
        {characters.map((character, idx) => <li key={idx}>{character.name}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <input
          ref={(input) => { this.searchInput = input; }}
          type={'text'}
          onChange={this.fetchCharacters}
          value={this.state.searchQuery}
          placeholder={'search'}
          >
        </input>
        {this.characterResults()}
      </div>
    );
  }
}

export default App;
