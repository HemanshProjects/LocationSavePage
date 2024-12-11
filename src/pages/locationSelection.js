import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

const LocationSelection = ({ apiKey }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC7yCnSeq_cZWnLHBCHbJKSdNXenk_tmjU`
      );
      const data = await response.json();
      if (data.status === 'OK') {
        return data.results[0].formatted_address;
      } else {
        throw new Error(data.error_message || 'Failed to fetch address.');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return 'Unknown location';
    }
  };

  const requestGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const address = await getAddressFromCoordinates(latitude, longitude);
        setCurrentAddress(address);
        setModalOpen(false);
      },
      () => {
        alert('Unable to fetch location. Please try again.');
      }
    );
  };

  return (
    <Box>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ padding: 2, background: 'white', margin: 'auto', top: '25%' }}>
          <h2>Location Permission</h2>
          <p>Please enable location permissions or search manually.</p>
          <Button onClick={requestGeolocation}>Enable Location</Button>
          <Button onClick={() => setModalOpen(false)}>Search Manually</Button>
        </Box>
      </Modal>

      <Box>
        <TextField
          fullWidth
          label="Current Address"
          value={currentAddress}
          disabled
          variant="outlined"
        />
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          Locate Me
        </Button>
      </Box>
    </Box>
  );
};

export default LocationSelection;
