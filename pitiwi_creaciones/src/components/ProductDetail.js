import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const products = [
  { id: 1, name: 'Producto 1', price: '$50', image: '/img/product1.jpg', description: 'Descripción detallada del producto 1.' },
  { id: 2, name: 'Producto 2', price: '$100', image: '/img/product2.jpg', description: 'Descripción detallada del producto 2.' },
  { id: 3, name: 'Producto 3', price: '$150', image: '/img/product3.jpg', description: 'Descripción detallada del producto 3.' }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.price}
        </Typography>
        <Typography variant="body1" component="p" style={{ marginTop: '10px' }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
