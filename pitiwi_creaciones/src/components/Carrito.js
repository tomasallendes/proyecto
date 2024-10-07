import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import { Typography, Button, List, ListItem } from '@mui/material';

const Carrito = () => {
  const { cartItems } = useContext(CartContext); // Obtener los productos del carrito

  return (
    <div>
      <Typography variant="h4">Carrito de Compras</Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <Typography>{item.nombre} - {item.precio} USD</Typography>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">Proceder al Pago</Button>
    </div>
  );
};

export default Carrito;
