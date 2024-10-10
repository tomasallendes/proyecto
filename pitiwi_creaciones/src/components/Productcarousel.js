import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
  // Definir cuántos productos mostrar dependiendo del total
  const slidesToShow = Math.min(products.length, 3); // Si hay menos de 3 productos, ajustamos

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
    <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}> {/* Ajustamos el ancho del carrusel */}
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
                  state={{ products }}
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