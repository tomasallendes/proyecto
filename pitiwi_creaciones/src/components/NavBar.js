import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#90EE90', 
        boxShadow: 'none', 
        borderBottom: '20px solid #FFFFFF', // Contorno en la parte inferior de la barra
        paddingBottom: '10px' // Añade un poco de relleno en la parte inferior
      }}
    >
      <Toolbar>
        {/* Contenedor para los botones */}
        <Box sx={{ flexGrow: 1 }}>
          <Button 
            sx={{ color: '#000000', marginLeft: '400px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to="/"
          >
            Home
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px' }} 
            component={Link} 
            to="/decoraciones"
          >
            Decoraciones
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to="/muebles"
          >
            Muebles
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to="/colgantes"
          >
            Colgantes
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to="/temporada"
          >
            Temporada
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
