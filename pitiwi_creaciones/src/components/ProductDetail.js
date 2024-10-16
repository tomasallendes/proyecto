import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Carousel from './Carousel';  // Importa tu componente de Carrusel
import { Grid, Typography, Box, Button } from '@mui/material';
import { CartContext } from './Cartcontext';
import ProductCarousel from './Productcarousel';

const ProductDetails = () => {
  const { id } = useParams();  // Obtener el id del producto desde la URL
  const [product, setProduct] = useState(null);  // Estado para almacenar el producto
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Usar el contexto del carrito
  const location = useLocation();
  const { products } = location.state;  // Obtener los productos para el carrusel
  console.log(products);

  useEffect(() => {
    // Hacer la petición a la API para obtener los detalles del producto
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/productos/${id}`);
        const data = await response.json();
        setProduct(data);  // Almacenar el producto en el estado
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);  // El efecto se ejecuta cada vez que el id cambia

  if (loading) {
    return <Typography>Cargando detalles del producto...</Typography>;
  }

  if (!product) {
    return <Typography>Producto no encontrado</Typography>;
  }

  // Convertimos las imágenes en un array para pasarlas al carrusel
  const images = [product.imagen_portada, product.imagen1, product.imagen2].filter(Boolean);  // Filtramos imágenes que no sean nulas
  
  return (
    <Grid container spacing={4} justifyContent="center">
      {/* Carrusel de imágenes a la izquierda */}
      <Grid item xs={12} md={6}>
        <Carousel images={images} width="80%" />
      </Grid>

      {/* Detalles del producto a la derecha */}
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h4" gutterBottom>{product.nombre}</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {product.descripcion}
          </Typography>
          <Typography variant="h6" color="primary">
            Precio: {product.precio} CLP
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Stock disponible: {product.stock}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Tipo de madera:</strong> {product.tipo_de_madera}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Dimensiones:</strong> {product.dimensiones}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Peso:</strong> {product.peso} kg
          </Typography>
          
          {/* Botón para añadir al carrito */}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => addToCart(product)}
            style={{ marginTop: '10px' }}>
            Añadir al carrito
          </Button>
        </Box>
      </Grid>

      {/* Carrusel de productos relacionados */}
      <Grid item xs={12}>
        {product && <ProductCarousel productCategoria={product.categoria} />}  {/* Pasamos la categoría como prop */}
      </Grid>
    </Grid>
  );
}; 

export default ProductDetails;
