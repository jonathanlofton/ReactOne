import React from 'react';
import config from '../config.js'

class PodcastFeed extends React.Component {
  constructor(props) {
    super(props)
    this.fetchBeers = this.fetchBeers.bind(this);
  }

  componentDidMount() {
    this.fetchBeers('budweiser');
  }

  fetchBeers(beerName) {
    let { beerKey } = config;
    let proxy = `https://cors-anywhere.herokuapp.com/`
    let url = `http://api.brewerydb.com/v2/beers?key=${beerKey}&name=${beerName}`
    fetch(proxy + url)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return(
     <div>
        <h1 className='body-header'>Podcast Feed</h1>
     </div> 
    )
  }
}

export default PodcastFeed;