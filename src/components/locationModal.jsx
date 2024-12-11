import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const LocationModal = ({ open, onEnable, onSearch }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Location Permission</DialogTitle>
      <DialogContent>
        Location permission is turned off. Please enable it or search manually.
      </DialogContent>
      <DialogActions>
        <Button onClick={onEnable} color="primary">Enable Location</Button>
        <Button onClick={onSearch} color="secondary">Search Manually</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LocationModal;
