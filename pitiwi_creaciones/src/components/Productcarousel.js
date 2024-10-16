import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ productCategoria }) => {  // Recibimos la categoría directamente
  const [products, setProducts] = useState([]);  // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);  // Estado para manejar el loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Categoria es:", productCategoria);
        const response = await fetch(`http://localhost:8000/api/productos/?categoria=${productCategoria}`);
        const data = await response.json();  // Convertir la respuesta a JSON
        console.log("Data es:", data);  // Verificar que los datos se reciban correctamente
        setProducts(data);  // Actualizar el estado con los productos obtenidos
        setLoading(false);  // Ya no está cargando

      } catch (error) { 
        console.error('Error al obtener productos:', error);
        setLoading(false);  // Aún si hay error, dejar de cargar
      }
    };  
    if (productCategoria) {
      fetchProducts();  // Solo llama si la categoría existe
    }
  }, [productCategoria]);  // Agrega dependencia para actualizar los productos si la categoría cambia

  if (loading) {
    return <Typography>Cargando productos...</Typography>;  // Mostrar algo mientras se cargan los productos
  }

  // Asegurarse de que calculamos el número de slides cuando los productos están cargados
  const slidesToShow = Math.min(products.length, 3); 

  const settings = {
    dots: true,
    infinite: false, 
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(products.length, 2),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(products.length, 1),
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ width: '50%', margin: '0 auto', padding: '20px' }}> {/* Ajustamos el ancho del carrusel */}
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '10px' }}>
            <Card style={{ maxWidth: '300px', margin: '0 auto' }}> {/* Ajustamos el ancho de la tarjeta */}
              <CardMedia
                component="img"
                height="200"
                image={product.imagen_portada}
                alt={product.nombre}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.precio}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  state={{ product }}
                  style={{ marginTop: '10px' }}
                >
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
