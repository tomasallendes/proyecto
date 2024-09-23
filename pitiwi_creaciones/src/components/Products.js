import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const products = [
  { id: 1, name: 'Producto 1', price: '$50', image: '/img/product1.jpg', description: 'Este es el producto 1.' },
  { id: 2, name: 'Producto 2', price: '$100', image: '/img/product2.jpg', description: 'Este es el producto 2.' },
  { id: 3, name: 'Producto 3', price: '$150', image: '/img/product3.jpg', description: 'Este es el producto 3.' }
];

const Products = () => {
  return (
    <div>
    <Carousel/>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
