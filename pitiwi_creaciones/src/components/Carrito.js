import React, { useContext } from 'react';
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from './Cartcontext'; // Asumiendo que tienes un contexto para el carrito

const Carrito = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount } = useContext(CartContext);

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontFamily: 'Cooper Black' }}>
          Carrito de Compras
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="h6" align="center" gutterBottom>
            Tu carrito está vacío.
          </Typography>
        ) : (
          <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {item.nombre}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => decreaseQuantity(item.id)}>
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton onClick={() => increaseQuantity(item.id)}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">{item.precio*item.quantity} CLP</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => removeFromCart(item.id)} color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {cartItems.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <Typography variant="h6" align="right">
              Total: {totalAmount} CLP
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: '20px', padding: '10px', fontFamily: 'Cooper Black' }}
              onClick={() => alert('Proceder al pago')}
            >
              Proceder al Pago
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Carrito;
