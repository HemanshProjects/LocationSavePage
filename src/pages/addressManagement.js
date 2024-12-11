import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', details: '123, Elm Street, Gotham' },
    { id: 2, label: 'Office', details: '456, Wayne Tower, Gotham' },
    { id: 3, label: 'Friends', details: '789, Central Park, Metropolis' },
  ]);
  const [search, setSearch] = useState('');
  const [editAddress, setEditAddress] = useState(null);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleEditSave = (id, details) => {
    setAddresses(
      addresses.map((address) =>
        address.id === id ? { ...address, details } : address
      )
    );
    setEditAddress(null);
  };

  const filteredAddresses = addresses.filter((address) =>
    address.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Manage Saved Addresses
      </Typography>
      <TextField
        label="Search Address"
        fullWidth
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <List>
        {filteredAddresses.map((address) => (
          <ListItem key={address.id}>
            <ListItemText
              primary={address.label}
              secondary={
                editAddress === address.id ? (
                  <TextField
                    fullWidth
                    value={address.details}
                    onChange={(e) =>
                      setEditAddress({ ...editAddress, details: e.target.value })
                    }
                    variant="standard"
                  />
                ) : (
                  address.details
                )
              }
            />
            <ListItemSecondaryAction>
              {editAddress === address.id ? (
                <Button
                  onClick={() => handleEditSave(address.id, editAddress.details)}
                >
                  Save
                </Button>
              ) : (
                <IconButton
                  edge="end"
                  onClick={() => setEditAddress({ id: address.id, details: address.details })}
                >
                  <Edit />
                </IconButton>
              )}
              <IconButton edge="end" onClick={() => handleDelete(address.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AddressManagement;
