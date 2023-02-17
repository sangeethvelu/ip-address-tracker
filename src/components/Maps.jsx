import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Maps(props) {
  console.log(props);

  // map.flyTo()

  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.latitude && props.longitude && (
        <Marker position={[props.latitude, props.longitude]}>
          <Popup>{props.location}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Maps;
