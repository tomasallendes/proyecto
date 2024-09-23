import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../img/foto1.jpg'

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <img
            src={logo} // Ruta de la imagen
            alt="Logo"
            style={{ height: '40px', marginRight: '16px' }} // Ajusta el tamaño y el margen según sea necesario
        />
        <Button color="inherit" component={Link} to="/products">
          Productos
        </Button> 
        <Button color="inherit" component={Link} to="/about">
          Contacto
        </Button>
        <Button color="inherit" component={Link} to="/carrito">
          Carrito
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
