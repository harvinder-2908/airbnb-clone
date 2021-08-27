import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const [selectedLocation, setSelectedLocation] = useState({});

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/harvinder2908/cksryvsbk2ppe17qhoxanyk94"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((res) => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetRight={-10}
          >
            <p
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === res.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
