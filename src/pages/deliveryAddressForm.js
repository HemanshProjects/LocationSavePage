import React, { useState } from 'react';
import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

const DeliveryAddressForm = ({ onSave }) => {
  const [form, setForm] = useState({
    house: '',
    area: '',
    category: 'Home',
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (name === 'house' && (!value || value.trim() === '')) {
      return 'House/Flat/Block number is required.';
    }
    if (name === 'area' && (!value || value.trim() === '')) {
      return 'Apartment/Road/Area is required.';
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSave = () => {
    const newErrors = {
      house: validateField('house', form.house),
      area: validateField('area', form.area),
    };
    setErrors(newErrors);

    if (!newErrors.house && !newErrors.area) {
      onSave(form);
    }
  };

  return (
    <Box>
      <TextField
        label="House/Flat/Block No."
        name="house"
        value={form.house}
        onChange={handleInputChange}
        error={!!errors.house}
        helperText={errors.house}
        fullWidth
      />
      <TextField
        label="Apartment/Road/Area"
        name="area"
        value={form.area}
        onChange={handleInputChange}
        error={!!errors.area}
        helperText={errors.area}
        fullWidth
        sx={{ mt: 2 }}
      />
      <ToggleButtonGroup
        value={form.category}
        exclusive
        onChange={(e, value) => setForm({ ...form, category: value })}
        sx={{ mt: 2 }}
      >
        <ToggleButton value="Home">Home</ToggleButton>
        <ToggleButton value="Office">Office</ToggleButton>
        <ToggleButton value="Friends">Friends & Family</ToggleButton>
      </ToggleButtonGroup>
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
        Save Address
      </Button>
    </Box>
  );
};

export default DeliveryAddressForm;
