import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importa el ícono del carrito
import PhoneIcon from '@mui/icons-material/Phone'; // Ícono del teléfono
import logo from '../img/Logo.jpg';
import LoginIcon from '@mui/icons-material/Login'; // Ícono del Login

const NavbarUp = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: '800px' }}>
          <img
            src={logo} // Ruta de la imagen
            alt="Logo"
            style={{ height: '250px' }} // Ajusta el tamaño según sea necesario
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button 
            sx={{ color: '#000000', marginLeft: '20px', fontFamily: 'Cooper Black' }} 
            component={Link} 
            to="/Login"
            startIcon={<LoginIcon/>}
            
          >
            Iniciar Sesion
          </Button>

          <Button 
            sx={{ color: '#000000', marginLeft: '20px', fontFamily: 'Cooper Black' }} 
            component={Link} 
            to="/contacto"
            startIcon={<PhoneIcon />} // Añadir el ícono de teléfono
          >
            Contacto
          </Button>

          <Button 
            sx={{ color: '#000000', marginLeft: '20px', fontFamily: 'Cooper Black' }} 
            component={Link} 
            to="/carrito"
            startIcon={<ShoppingCartIcon />} // Añade el ícono del carrito al inicio del texto
          >
            Carrito
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarUp;
