import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ width = '60%', images = [] }) => { // Definimos valores por defecto
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width }}> {/* Usamos la prop width */}
        <Slider {...settings}>
          {images.map((image, index) => ( // Iteramos sobre el array de imágenes
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
