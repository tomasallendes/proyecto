import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

import product1 from '../img/producto1.jpg';
import product2 from '../img/producto2.jpg';
import product3 from '../img/producto3.jpg';
import product4 from '../img/producto4.jpg';


const products = [
  { id: 1, name: 'Producto 1', price: '$50', image: product1, description: 'Este es el producto 1.' },
  { id: 2, name: 'Producto 2', price: '$100', image: product2, description: 'Este es el producto 2.' },
  { id: 3, name: 'Producto 3', price: '$150', image: product3, description: 'Este es el producto 3.' },
  { id: 3, name: 'Producto 3', price: '$250', image: product4, description: 'Este es el producto 4.' }
];

const Products = () => {
  return (
    <div>
      <Grid2 container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid2 item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                >
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Products;
