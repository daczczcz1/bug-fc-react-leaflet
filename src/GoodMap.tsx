import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { LeafletMouseEvent, LatLng } from 'leaflet';

interface Props {

}

interface State {
  markers: LatLng[]
}
class GoodMap extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const initial: LatLng[] = [];
    this.state = {
      markers: initial
    }
  }

  addMarker = (e: LeafletMouseEvent) => {
    const markers: LatLng[] = (this.state as State).markers
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    return (
      <Map 
        center={[51.505, -0.09]} 
        onClick={this.addMarker}
        zoom={13} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {(this.state as State).markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}

export default GoodMap;