import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

    const mapStyles = {
        width: '50%',
        height: '50%',
    };

    export class MapContainer extends Component {
        constructor(props) {
            super(props);
        
            this.state = {
                stores: [{lat: 47.49855629475769, lng: -122.14184416996333}
                ]
            }
        }

        onMarkerDragEnd = (coord) => {
            const { latLng } = coord;
            const lat = latLng.lat();
            const lng = latLng.lng();
            console.log(lat, lng)
        };
    
        render() {
            return (
                <Map
                    google={this.props.google}
                    zoom={3}
                    style={mapStyles}
                    initialCenter={{ lat: 37.0902, lng: -95.7129}}>
                    <Marker 
                        draggable={true}
                        name={'Current location'} 
                        onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
                        />        
                </Map>
            );
        }
    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyAkY-Gd38UyXiesmXf4rRKltWncrAAbjfg'
        })(MapContainer);