  import React, { useState, useEffect } from 'react';
  import { Card, CardContent, CardMedia, Typography, Button, Grid2 } from '@mui/material';
  import { Link } from 'react-router-dom';

  const Products = () => {
    const [products, setProducts] = useState([]);  // Estado para almacenar los productos
    const [loading, setLoading] = useState(true);  // Estado para manejar el loading
    const categoria = 'Mueble';
    useEffect(() => {
      // Hacer la petición a la API cuando el componente se monte
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/productos/?categoria=${categoria}`);
          const data = await response.json();  // Convertir la respuesta a JSON
          console.log(data);  // Verificar que los datos se reciban correctamente
          setProducts(data);  // Actualizar el estado con los productos obtenidos
          setLoading(false);  // Ya no está cargando
        } catch (error) { 
          console.error('Error al obtener productos:', error);
          setLoading(false);  // Aún si hay error, dejar de cargar
        }
      };

      fetchProducts();
    }, []);  // Solo se ejecuta una vez cuando el componente se monta

    if (loading) {
      return <Typography>Cargando productos...</Typography>;  // Mostrar algo mientras se cargan los productos
    }

    return (
      <div>
          <Grid2 container spacing={4} justifyContent="center">
            {products.map((product) => (
              <Grid2 item key={product.sku} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.imagen_portada} // Usar la imagen de la API
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
                      state={{ products }}
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
