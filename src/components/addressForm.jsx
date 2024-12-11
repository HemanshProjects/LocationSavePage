import React, { useState } from 'react';
import { TextField, Button, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Home, Work, People } from '@mui/icons-material';

const AddressForm = ({ onSave }) => {
  const [form, setForm] = useState({ house: '', area: '', category: 'Home' });

  const handleSave = () => {
    onSave(form);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="House/Flat/Block No." onChange={(e) => setForm({ ...form, house: e.target.value })} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Apartment/Road/Area" onChange={(e) => setForm({ ...form, area: e.target.value })} />
      </Grid>
      <Grid item xs={12}>
        <ToggleButtonGroup
          value={form.category}
          exclusive
          onChange={(e, value) => setForm({ ...form, category: value || form.category })}
        >
          <ToggleButton value="Home"><Home /> Home</ToggleButton>
          <ToggleButton value="Office"><Work /> Office</ToggleButton>
          <ToggleButton value="Friends & Family"><People /> Friends & Family</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSave}>Save Address</Button>
      </Grid>
    </Grid>
  );
};

export default AddressForm;
