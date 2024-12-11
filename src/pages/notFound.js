import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
