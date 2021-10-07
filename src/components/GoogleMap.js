import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import {Link,BrowserRouter} from 'react-router-dom'



    export class MapContainer extends Component {
        constructor(props) {
            super(props);

            this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            activeLocation:{},
            selectedPlace: "",
            tempPostition:{lat: 38.63828833248563,lng: -105.13916953125002}
                // stores: [{lat: 47.49855629475769, lng: -122.14184416996333}
                // ]
        }}
        
          onMarkerClick = (props, marker, e) =>{

            this.setState({
              activeLocation:props.position,
              selectedPlace: props.name,
              activeMarker: marker,
              showingInfoWindow: true
            })};
        
          onMapClicked = (props) => {
              console.log(this.state)

            if (this.state.showingInfoWindow) {
              this.setState({
                showingInfoWindow: false,
                activeMarker: null
              })
            }
          };

        onMarkerDragEnd = (coord) => {
            const { latLng } = coord;
            const lat = latLng.lat();
            const lng = latLng.lng();
            this.props.setAnswers({
                ...this.props.answers, 
                latlng:{lat,lng}
            })
        };

        render() {
            return (
                <div className='mapStyles'
                >
                <Map
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    zoom={3}
                    style={{height:'50%', width: '50%' }}
                    resetBoundsOnResize = {true}
                    initialCenter={{ lat: 37.0902, lng: -95.7129}}>
                    <InfoWindow
                        position={this.state.activeLocation}
                        visible={this.state.showingInfoWindow}>
                            {/* <Link onClick={() => this.props.getNo(`${this.state.selectedPlace}`,this.props.siteArr,this.props.currentSite)} key={this.state.selectedPlace} to={ "/manager/"+ this.state.selectedPlace}> {this.state.selectedPlace} </Link>  */}
                            <h6>{this.state.selectedPlace}</h6>
                    </InfoWindow>

                    {this.props.gMapArr?
                        this.props.gMapArr.map(location =>{
                            
                            return <Marker 
                            onClick={this.onMarkerClick}
                            name={location.location}
                            key={location.location}
                            position={JSON.parse(location.latlng)}
                            />    

                        })   
                        
                        :
                        
                        <Marker 
                        draggable={true}
                        name={'latlng'} 
                        onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
                        /> }
                </Map>

                </div>
            );
        }
    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyAkY-Gd38UyXiesmXf4rRKltWncrAAbjfg'
        })(MapContainer);