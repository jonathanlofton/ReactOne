import React from 'react';
import keys from './config'

class Places extends React.Component {
  render() {
    const { googlePlaces } = keys;
    console.log(googlePlaces)
    return(
      <div>
        <h1>PLACES</h1>
      </div>
    )
  }
}

export default Places;