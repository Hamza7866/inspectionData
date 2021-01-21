import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = ({ inspectionData }) => {
  console.log(inspectionData);
  return (
    <div className="main">
      <div className="sidebar">
        <h1>Restaurant Inspection</h1>
        {inspectionData.map((item) => {
          return (
            <div>
              <div>
                <h6>{item.dba}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <MapContainer
        center={[40.706313384702, -74.003217267259]}
        zoom={11}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        )
        {inspectionData.map((restaurant, index) => {
          return (
            <div key={index}>
              <Marker
                position={[restaurant.latitude, restaurant.longitude]}
                className="marker"
              >
                <Popup className="popup">
                  <h1 className="name">{restaurant.dba}</h1>
                  <h2>Cuisine: {restaurant.cuisine_description}</h2>
                  <h3>
                    Address: {restaurant.building} {restaurant.street}
                  </h3>
                  <h2> Restaurant Grade: {restaurant.grade}</h2>
                  <h3>Phone: {restaurant.phone}</h3>
                  <p>
                    <span> Violation of Restaurant: </span>
                    {restaurant.violation_description}
                  </p>
                </Popup>
              </Marker>
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
