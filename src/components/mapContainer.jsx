import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const MapContainer = ({ location, onLocationChange }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={location}
      zoom={14}
      mapContainerStyle={{ width: '100%', height: '400px' }}
      onClick={(e) => onLocationChange({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
    >
      <Marker position={location} draggable onDragEnd={(e) => onLocationChange({ lat: e.latLng.lat(), lng: e.latLng.lng() })} />
    </GoogleMap>
  );
};

export default MapContainer;
