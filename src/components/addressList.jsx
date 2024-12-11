import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const AddressList = ({ addresses, onEdit, onDelete }) => (
  <List>
    {addresses.map((address, index) => (
      <ListItem key={index} secondaryAction={
        <>
          <IconButton onClick={() => onEdit(address)}><Edit /></IconButton>
          <IconButton onClick={() => onDelete(address)}><Delete /></IconButton>
        </>
      }>
        <ListItemText primary={address.category} secondary={`${address.house}, ${address.area}`} />
      </ListItem>
    ))}
  </List>
);

export default AddressList;
