import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { categoria } = useParams();  // Obtén la categoría desde el estado pasado por el Navbar

  const [products, setProducts] = useState([]);  // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);  // Estado para manejar el loading

  useEffect(() => {
    if (!categoria) {
      console.error('No se recibió ninguna categoría.');
      return;
    } 

    // Hacer la petición a la API cuando se recibe la categoría
    const fetchProducts = async () => {
      try {
        console.log("categoria es: ",categoria)
        const response = await fetch(`http://localhost:8000/api/productos/?categoria=${categoria}`);
        const data = await response.json();
        setProducts(data);  // Actualizar el estado con los productos obtenidos
        setLoading(false);  // Ya no está cargando
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setLoading(false);  // Aún si hay error, dejar de cargar
      }
    };

    fetchProducts();
  }, [categoria]);

  if (loading) {
    return <Typography>Cargando productos...</Typography>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Grid2 container spacing={4} justifyContent="left">
        {products.map((product) => (
          <Grid2 item key={product.sku} xs={12} sm={6} md={4}>
            <Card style={{ maxWidth: '300px', margin: '0 auto' }}>
              <CardMedia
                component="img"
                height="400"
                image={product.imagen_portada}
                alt={product.nombre}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.precio}
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
