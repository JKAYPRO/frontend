import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Club Management
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={RouterLink} to="/documents">
          Documents      
        </Button>
        <Button color="inherit" component={RouterLink} to="/meetings">
          Meetings   
        </Button>
        <Button color="inherit" component={RouterLink} to="/meetings-list">
          Meetings List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
