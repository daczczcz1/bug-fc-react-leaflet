import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet';

export type MarkerCoords = {
  lat: number,
  lon: number
}

const BadMap: React.FC = () => {
  const [currentMarkers, setMarkers] = useState<MarkerCoords[]>([]);
  const addMarker = (e: LeafletMouseEvent) => {
    const coords: MarkerCoords = { lat: e.latlng.lat, lon: e.latlng.lng }
    const newMarkers = currentMarkers 
    newMarkers.push(coords)
    setMarkers(newMarkers)
  }

  return (
    <div data-testid="LeafletMap" className="LeafletMap">
          {console.log("rendering")}
      <Map
        onClick={addMarker}
        center={[51.505, -0.09]} 
        zoom={13} 
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {currentMarkers.map((pos, idx) => 
          <Marker 
          position={{lat: pos.lat, lng: pos.lon}}>
            <Popup>
            <span>{idx}</span>
              </Popup>   
          </Marker>
        )}
        

      </Map>
    </div>
  )
}

export default BadMap;

