import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


export default function Header(){
    const [apiError, setApiError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
        try {
           
          setSuccessMessage('Logout successful');
          setApiError('');
          // Clear tokens from localStorage or cookies if applicable
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');

          document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          
          setSuccessMessage('Logout successful');
          setApiError('');
              

          navigate('/login');
        } catch (err) {
          setApiError("Logout API error: " + err.message);
          setSuccessMessage('');
        }
      };
const cart = ()=>{
    navigate('/cart');
}


    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecom
          </Typography>
          
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      {apiError && <Alert severity="error">{apiError}</Alert>}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
    </Box> 
    )
}

