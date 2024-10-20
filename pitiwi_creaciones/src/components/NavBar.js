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
        borderBottom: '20px solid #FFFFFF', 
        paddingBottom: '10px' 
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button 
            sx={{ color: '#000000', marginLeft: '400px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to={{
              pathname: "/productos/home",
              state: { categoria: 'Colgante' }
            }}
          >
            Home
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to={{
              pathname: "/productos/decoracion",
              state: { categoria: 'Decoración' }
            }}
          >
            Decoraciones
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to={{
              pathname: "/productos/mueble",
              state: { categoria: ',Mueble' }
            }}
          >
            Muebles
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to={{
              pathname: "/productos/colgante",
              state: { categoria: 'Colgante' }
            }}
          >
            Colgantes
          </Button>
          <Button 
            sx={{ color: '#000000', marginLeft: '100px', fontFamily: 'Cooper Black', fontSize: '16px'}} 
            component={Link} 
            to={{
              pathname: "/productos/temporada",
              state: { categoria: 'Temporada' }
            }}
          >
            Temporada
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
