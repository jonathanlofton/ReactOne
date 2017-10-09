import React from 'react';
import keys from './config'

class Places extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

    // map = new google.maps.Map(document.getElementById('map'), {
    //   center: pyrmont,
    //   zoom: 15
    // });

    // var request = {
    //   location: pyrmont,
    //   radius: '500',
    //   type: ['restaurant']
    // };

    // service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, callback);
    // console.log()
  }

  initMap() {
    const { google } = window
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  
  render() {
    const { googlePlaces } = keys;
    console.log(googlePlaces)
    console.log(window.google)
    return(
      <div>
        <h1>PLACES</h1>
        <div id='map'></div>
      </div>
    )
  }
}

export default Places;