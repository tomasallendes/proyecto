import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Grid, Alert } from '@mui/material';
import { Lock, Email } from '@mui/icons-material'; // Importar íconos
import logo from '../img/foto1.jpg';

const Login = () => {
  // Estado para almacenar el correo electrónico, la contraseña y el error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Manejador de evento para cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Validación simple
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes manejar el login, como enviar los datos a un servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: '800px' }}>
            <img
              src={logo} // Ruta de la imagen
              alt="Logo"
              style={{ height: '300px' }} // Ajusta el tamaño según sea necesario
            />
      </Box>
      <Container maxWidth="xs" sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '20px', marginTop: '10px'}}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Iniciar Sesión</Typography>

          {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}

          {/* Formulario de login */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Email sx={{ color: 'action.active', mr: 1 }} />
                ),
              }}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ color: 'action.active', mr: 1 }} />
                ),
              }}
            />
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  ¿No tienes cuenta? <a href="/register">Regístrate</a>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
