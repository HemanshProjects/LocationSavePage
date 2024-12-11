// src/components/LocationPage.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button, Box } from '@mui/material';

const LocationPage = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  // Function to locate user
  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          alert('Location access denied or unavailable.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={locateMe}>
        Locate Me
      </Button>

      <div style={{ height: '400px', width: '100%' }}>
        <LoadScript googleMapsApiKey= {process.env.GOOGLE_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: location.lat, lng: location.lng }}
            zoom={14}
          >
            <Marker position={{ lat: location.lat, lng: location.lng }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </Box>
  );
};

export default LocationPage;
