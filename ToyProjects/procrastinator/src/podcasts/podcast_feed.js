import React from 'react';
import config from '../config.js'

class PodcastFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      beerName: '',
      beerInfo: {},
    }
  }

  componentDidMount() {
  }

  fetchBeerByName() {
    console.log(this.state.beerName)
    let { beerKey } = config;
    let proxy = `https://cors-anywhere.herokuapp.com/`
    let url = `http://api.brewerydb.com/v2/beers?key=${beerKey}&name=${this.state.beerName}`
    fetch(proxy + url)
    .then(res => res.json())
    .then(res => this.setState({ beerInfo: res }))
  }

  handleChange(e) {
    this.setState({
      beerName: e.target.value
    })
  }

  render() {
    const { beerInfo } = this.state;
    let beer;
    console.log(beerInfo)
    if (beerInfo.data) {
      const { data } = beerInfo;
      beer = data.map((beer, idx) => (
        <li key={idx}>
          <img src={`${beer.labels.icon}`} alt={`${beer.name}`}/>
          <p>{beer.name}</p>
          <p>{beer.style.description}</p>
        </li>
      )) 
    } else {
      beer = null
    }
    
    
    return(
     <div>
        <h1 className='body-header'>Beer Feed</h1>
        <form onSubmit={() => this.fetchBeerByName()}>
          <input type='text' value={this.state.beerName} onChange={(e) => this.handleChange(e)}/>
          <button>Search</button>
        </form>
        <ul>
          { beer }
        </ul>
     </div> 
    )
  }
}

export default PodcastFeed;