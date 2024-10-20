import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        Contacto: +56 9 1234 5678 | correo@tucarpinteria.com | Avenida de la Madera 123, Santiago, Chile
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
        <Link href="https://facebook.com" color="inherit"><Facebook /></Link>
        <Link href="https://www.instagram.com/pitiwe_creaciones/" color="inherit"><Instagram /></Link>
        <Link href="https://youtube.com" color="inherit"><YouTube /></Link>
      </Box>
      
      <Typography variant="body2">
        © 2024 Pitiwe Creaciones. Todos los derechos reservados.
      </Typography>

      <Typography variant="body2">
        <Link href="/privacidad" color="inherit">Política de privacidad</Link> | <Link href="/terminos" color="inherit">Términos y condiciones</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
