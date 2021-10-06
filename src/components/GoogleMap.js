import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

    const mapStyles = {
        width: '50%',
        height: '50%',
    };

    export class MapContainer extends Component {
        constructor(props) {
            super(props);
            // setTimeout(() => {
            //     console.log(this.props.gMapArr)

            // }, 1000);
            // if(this.props.){

            // }else{

            // }
            this.state = {
                stores: [{lat: 47.49855629475769, lng: -122.14184416996333}
                ]
            }
        }

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
                <>
                <Map
                    google={this.props.google}
                    zoom={3}
                    style={mapStyles}
                    initialCenter={{ lat: 37.0902, lng: -95.7129}}>


                    {this.props.gMapArr?
                        this.props.gMapArr.map(location =>{
                            console.log("location",location.location,JSON.parse(location.latlng));
                            
                            return <Marker 
                            key={location.location}
                            title={'location.location'}
                            position={JSON.parse(location.latlng)}
                            />    
                        })
                        :
                        <Marker 
                        draggable={true}
                        name={'latlng'} 
                        position={{ lat: 37.0902, lng: -95.7129}}
                        onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
                        /> }
                </Map>

                </>
            );
        }
    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyAkY-Gd38UyXiesmXf4rRKltWncrAAbjfg'
        })(MapContainer);