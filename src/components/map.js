import React, { useState } from "react";
import SearchBar from "./searchBar";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export const MapContainer = (props) => {
  const myData = props.data;
  const [state, setState] = useState({
    stores: [
      { lat: props.latitude, lng: props.longitude },
      { latitude: 19.076, longitude: 72.8777 },
      { latitude: 28.6448, longitude: 77.216721 },
      { latitude: 22.5726, longitude: 88.3639 },
      { latitude: 13.0827, longitude: 80.2707 },
      { latitude: 12.9716, longitude: 77.5946 },
    ],
  });

  const displayMarkers = () => {
    return state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => {
            console.log(status);
          }}
        />
      );
    });
  };

  const mapStyles = {
    width: "70%",
    height: "70%",
  };

  var status;
  if (myData.status === 1) {
    status = "Online";
  } else {
    status = "Offline";
  }
  console.log(myData);
  return (
    <div>
      <div className="result">
        <h2>Status : {status}</h2>
      </div>
      <div>
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 28.6448, lng: 77.216721 }}
          center={{ lat: myData.latitude, lng: myData.longitude }}
        >
          {displayMarkers()}
        </Map>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDOK4QlDiX_mfTKfzekUWNeIvz9bQjLewk",
})(MapContainer);
