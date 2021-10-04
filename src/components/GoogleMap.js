import React,{Component} from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%',
  };

// export class MapContainer extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         stores: [{lat: 47.49855629475769, lng: -122.14184416996333}
//         ]
//       }
//     }
  
//     displayMarkers = () => {
//       return this.state.stores.map((store, index) => {
//         return <Marker key={index} id={index} position={{
//          lat: store.latitude,
//          lng: store.longitude
//        }}
//        onClick={() => console.log("You clicked me!")} />
//       })
//     }
  
//     render() {
//       return (
//           <Map
//             google={this.props.google}
//             zoom={8}
//             style={mapStyles}
//             initialCenter={{ lat: 47.444, lng: -122.176}}
//           >
//             {this.displayMarkers()}
//           </Map>
//       );
//     }
//   }
// -----------------------------------------
  export function MapContainer (props){

        var stores= [
            {lat: 47.49855629475769, lng: -122.14184416996333}
        ]
  
    function displayMarkers () {
      return stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
      return (
          <Map
            google={window.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            {displayMarkers()}
          </Map>
      );
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAkY-Gd38UyXiesmXf4rRKltWncrAAbjfg'
    })(MapContainer);