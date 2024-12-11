import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Location App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Location
          </Button>
          <Button color="inherit" component={Link} to="/addresses">
            Saved Addresses
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
